import strings from '../data/strings'
import {ObjectId} from '../mongo'

const foldm = (r,j) => r.reduce((a,b,i,g) => !(i % j) ? a.concat([g.slice(i,i+j)]) : a, [])

export default function(bot, db) {
	db.cards = db.collection('cards')
	db.tags = db.collection('tags')

	bot.createActivity('learn', activity => {

		activity.on('home', async (msg, history) => {

			if (history.reason == 'normal') {

				let card = {
					chat_id: msg.chat.id,
					tag: 'word',
					content: msg.text,
					message: Object.assign({}, ...['text', 'photo', 'audio', 'voice', 'video', 'document', 'caption'].map(p => msg[p] && {[p]: msg[p]})),
					group: 1,
					speed: 1,
					easy: 0,
					hard: 0,
					review: 1,
				}
				await db.cards.insertOne(card)

				var tags = (await db.tags.find({chat_id: msg.chat.id}).toArray()).filter(tag => tag.title != 'word').map(tag => {
					return {text: tag.title, callback_data: new Buffer(`newcard_tag:${card._id}:${tag.title}`).toString('base64')}
				})

				let opts = {
					reply_to_message_id: msg.message_id,
					reply_markup: {
						inline_keyboard: foldm(tags, 2)
					}
				}
				return bot.sendMessage(msg.chat.id, 'saved', opts)
			}

			let opts = {
				reply_markup: {
					keyboard: [['back']],
					resize_keyboard: true,
				}
		    }

			bot.sendMessage(msg.chat.id, 'learn', opts)
		})

		activity.on('back', ['start', 'home'])
	})

	bot.on('callback_query', async cq => {
		let [action, card_id, ...params] = Buffer.from(cq.data, 'base64').toString().split(':')

		let card = await db.cards.findOne(ObjectId(card_id))

		switch(action) {
			case 'newcard_tag': {
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
		}
	})
}