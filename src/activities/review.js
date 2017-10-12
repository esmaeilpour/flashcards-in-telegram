import strings from '../data/strings'
import {ObjectId} from '../mongo'
import configs from '../configs'

const foldm = (r,j) => r.reduce((a,b,i,g) => !(i % j) ? a.concat([g.slice(i,i+j)]) : a, [])

export default function(bot, db) {
	db.cards = db.collection('cards')
	db.tags = db.collection('tags')

	var nextCard = () => {
		return db.cards.find().sort({next_study: 1}).limit(1).next()
	}

	var cardButtons = (id, hideMore) => {
		let mainButtons = [
			{text: 'very easy', callback_data: new Buffer(`very_easy:${id}`).toString('base64')},
			{text: 'easy', callback_data: new Buffer(`easy:${id}`).toString('base64')},
			{text: 'hard', callback_data: new Buffer(`hard:${id}`).toString('base64')},
			{text: 'very hard', callback_data: new Buffer(`very_hard:${id}`).toString('base64')},
		]
		return hideMore ? [
			[
				{text: 'append', callback_data: new Buffer(`append:${id}`).toString('base64')},
				{text: 'replace', callback_data: new Buffer(`replace:${id}`).toString('base64')},
				{text: 'tag', callback_data: new Buffer(`tag:${id}`).toString('base64')},
				{text: 'delete', callback_data: new Buffer(`delete:${id}`).toString('base64')},
			],
			[
				{text: 'back', callback_data: new Buffer(`back:${id}`).toString('base64')},
			],
		] : [
			mainButtons,
			[{text: 'more', callback_data: new Buffer(`more:${id}`).toString('base64')}]
		]
	}

	bot.createActivity('review', activity => {

		activity.on('home', async (msg, history) => {
			if (!history.params.tag) {
				return history.forward(['tags', 'home'], {back_to: 'review'})
			}

			if (history.reason == 'normal') {
				return bot.sendMessage(msg.chat.id, 'ok')
			}

			let opts = {
				reply_markup: {
					keyboard: [['continue', 'back']],
					resize_keyboard: true,
				}
		    }

			await bot.sendMessage(msg.chat.id, 'review', opts)

			history.forward(['continue_review'], history.params)
		})


		activity.on('continue_review', async (msg, history) => {
			if (msg.text == 'back') {
				return history.forward(['tags'])
			}

			if (history.reason == 'normal' && msg.text != 'continue') {
				let PendingUpdate = await bot.cache.get('PendingUpdate' + msg.chat.id)

				if (PendingUpdate) {
					let card = await db.cards.findOne({_id: ObjectId(PendingUpdate.id)})
					if (PendingUpdate.type == 'append') {
						if (card.message.text) {
							card.message.text = card.message.text + "\n" + msg.text
						} else {
							card.message.caption = (card.message.caption || '') + "\n" + msg.text
						}
					} else if (PendingUpdate.type == 'replace') {
						card.message = Object.assign({}, ...['text', 'photo', 'audio', 'voice', 'video', 'document', 'caption'].map(p => msg[p] && {[p]: msg[p]}))
					}
					db.cards.save(card)

					return await bot.sendMessage(msg.chat.id, 'ok', {reply_to_message_id: PendingUpdate.message_id})
				}
			}

			await bot.cache.set('PendingUpdate' + msg.chat.id, null)
			

			let tag_title = history.params.tag
			let query = {tag: tag_title}

			if (tag_title == 'other') {
				var tags = (await db.tags.find({chat_id: msg.chat.id}).toArray()).map(tag => tag.title)
				query = {tag: {$nin: ['word', ...tags]}}
			}

			let tag = await db.tags.findOne({chat_id: msg.chat.id, title: tag_title})
			let cursor = db.cards.find(query).sort({next_study: 1}).limit(10)

			if (!(await cursor.count())) {
				return bot.sendMessage(msg.chat.id, 'empty')
			}

			cursor.forEach(card => {
				let message = card.message
				let hideMore = (tag_title == 'word' || (tag_title != 'other' && tag.more))
				let opts = {
					reply_markup: {
						inline_keyboard: cardButtons(card._id),
						resize_keyboard: false,
					},
					caption: hideMore ? '' : message.caption,
				}
				if (message.text) {
					return bot.sendMessage(msg.chat.id, hideMore ? message.text.split("\n")[0] : message.text, opts)
				}
				else if (message.photo) {
					return bot.sendPhoto(msg.chat.id, message.photo[message.photo.length - 1].file_id, opts)
				}
				else if (message.video) {
					return bot.sendVideo(msg.chat.id, message.video.file_id, opts)
				}
				else if (message.audio) {
					return bot.sendAudio(msg.chat.id, message.audio.file_id, opts)
		        }
		        else if (message.voice) {
					return bot.sendVoice(msg.chat.id, message.voice.file_id, opts)
		        }
		        else if (message.document) {
					return bot.sendDocument(msg.chat.id, message.document.file_id, opts)
		        }
				
			})
		})

		activity.on('tags', async (msg, history) => {
			await bot.cache.set('PendingUpdate' + msg.chat.id, null)
			history.forward(['tags', 'home'], {back_to: 'review', tag: null})
		})

		activity.on('continue', ['review', 'home'])
		activity.on('back', ['tags'])
	})

	bot.on('callback_query', async cq => {
		let [action, card_id, ...params] = Buffer.from(cq.data, 'base64').toString().split(':')

		let card = await db.cards.findOne(ObjectId(card_id))
		let review = async () => {
			let opts = {
				chat_id: cq.message.chat.id,
				message_id: cq.message.message_id,
			}
			await bot.editMessageReplyMarkup({
				inline_keyboard: [
					[
						{text: 'undo', callback_data: new Buffer(`undo:${card._id}`).toString('base64')},
					]
				]
			}, opts)
		}

		switch(action) {
			case 'very_easy': {
				let nextGroup = Math.min(card.group + 1, 3)
				let delay = configs.cardGroups[nextGroup] * 2

				await db.cards.updateOne({_id: card._id}, {$set: {next_study: +new Date + delay}, $inc: {easy: 1}})

				await review()
				break
			}

			case 'easy': {
				let nextGroup = Math.min(card.group + 1, 3)
				let delay = configs.cardGroups[nextGroup]

				await db.cards.updateOne({_id: card._id}, {$set: {next_study: +new Date + delay}, $inc: {easy: 1}})

				await review()
				break
			}

			case 'hard': {
				let nextGroup = Math.max(card.group - 1, 1)
				let delay = configs.cardGroups[nextGroup]

				await db.cards.updateOne({_id: card._id}, {$set: {next_study: +new Date + delay}, $inc: {hard: 1}})

				await review()
				break
			}

			case 'very_hard': {
				let nextGroup = Math.max(card.group - 1, 1)
				let delay = configs.cardGroups[nextGroup] / 2

				await db.cards.updateOne({_id: card._id}, {$set: {next_study: +new Date + delay}, $inc: {hard: 1}})

				await review()
				break
			}

			case 'back': {
				let opts = {
					chat_id: cq.message.chat.id,
					message_id: cq.message.message_id,
				}
				await bot.editMessageReplyMarkup({
					inline_keyboard: cardButtons(card._id)
				}, opts)
				break
			}

			case 'undo': {
				let opts = {
					chat_id: cq.message.chat.id,
					message_id: cq.message.message_id,
				}
				await bot.editMessageReplyMarkup({
					inline_keyboard: cardButtons(card._id)
				}, opts)
				break
			}

			case 'tag': {
				var tags = (await db.tags.find({chat_id: cq.message.chat.id}).toArray()).map(tag => {
					return {text: tag.title, callback_data: new Buffer(`tag_change:${card._id}:${tag.title}`).toString('base64')}
				})

				tags = [
					{text: 'word', callback_data: new Buffer(`tag_change:${card._id}:word`).toString('base64')},
					...tags,
				]

				let opts = {
					chat_id: cq.message.chat.id,
					message_id: cq.message.message_id,
				}
				await bot.editMessageReplyMarkup({
					inline_keyboard: [...foldm(tags, 2), [{text: 'cancel', callback_data: new Buffer(`tag_change:${card._id}:_cancel_`).toString('base64')}]],
				}, opts)
				break
			}

			case 'tag_change': {
				let [tag] = params

				if (tag != '_cancel_') {
					await db.cards.updateOne({_id: card._id}, {$set: {tag}})
				}

				let opts = {
					chat_id: cq.message.chat.id,
					message_id: cq.message.message_id,
				}
				await bot.editMessageReplyMarkup(tag != '_cancel_' ? null : {inline_keyboard: cardButtons(card._id)}, opts)
				break
			}

			case 'delete': {
				await db.cards.remove({_id: card._id})
				let opts = {
					chat_id: cq.message.chat.id,
					message_id: cq.message.message_id,
				}
				await bot.editMessageReplyMarkup(null, opts)
				break
			}

			case 'append': {
				await bot.cache.set('PendingUpdate' + cq.message.chat.id, {type: 'append', id: card._id, message_id: cq.message.message_id})
				bot.answerCallbackQuery(cq.id, 'send more')
				break
			}

			case 'replace': {
				await bot.cache.set('PendingUpdate' + cq.message.chat.id, {type: 'replace', id: card._id, message_id: cq.message.message_id})
				bot.answerCallbackQuery(cq.id, 'send new')
				break
			}

			case 'more': {
				let opts = {
					chat_id: cq.message.chat.id,
					message_id: cq.message.message_id,
					reply_markup: {
						inline_keyboard: cardButtons(card._id, true)
					},
				}
				if (card.message.text) {
					await bot.editMessageText(card.message.text, opts)
				} else {
					await bot.editMessageCaption(card.message.caption, opts)
				}
				break
			}
		}
	})
}