import strings from '../data/strings'

const foldm = (r,j) => r.reduce((a,b,i,g) => !(i % j) ? a.concat([g.slice(i,i+j)]) : a, [])

export default function(bot, db) {
	db.tags = db.collection('tags')

	bot.createActivity('tags', activity => {

		activity.on('home', async (msg, history) => {
			var tags = (await db.tags.find({chat_id: msg.chat.id}).toArray()).map(tag => tag.title)

			tags.unshift('word')

			if (history.reason == 'normal') {
				let tag = msg.text
				if (tags.indexOf(tag) == -1) {
					return history.forward(['home'], history.params)
				}
				return history.forward([history.params.back_to, 'home'], {tag})
			}

			let opts = {
				reply_markup: JSON.stringify({
					keyboard: [...foldm(tags, 2), activity.keyboards[0]],
					resize_keyboard: true,
				})
		    }
			bot.sendMessage(msg.chat.id, 'tag', opts)
		})

		activity.on('back_here', (msg, history) => {
			return history.forward(['tags', 'home'], {tag: null})
		})

		activity.on('other_tag', (msg, history) => {
			return history.forward([history.params.back_to, 'home'], {tag: 'other'})
		})

		activity.on('other', ['other_tag'])
		activity.on('new', ['tags_new', 'home'])
		activity.on(strings.back, ['start', 'home'])
	})

	bot.createActivity('tags_new', activity => {

		activity.on('home', async (msg, history) => {
			if (history.reason == 'normal') {
				return history.forward(['tags_new_more', 'home'], {title: msg.text})
			}

			let opts = {
				reply_markup: JSON.stringify({
					keyboard: activity.keyboards,
					resize_keyboard: true,
				})
		    }
			bot.sendMessage(msg.chat.id, 'title?', opts)
		})

		activity.on(strings.back, ['tags', 'home'])
	})

	bot.createActivity('tags_new_more', activity => {

		activity.on('home', async (msg, history) => {
			if (history.reason == 'normal') {
				await db.tags.insertOne({
					chat_id: msg.chat.id,
					title: history.params.title,
					more: msg.text == 'yes',
				})
				return history.forward(['start', 'home'])
			}

			let opts = {
				reply_markup: JSON.stringify({
					keyboard: [['yes', 'no']],
					resize_keyboard: true,
				})
		    }
			bot.sendMessage(msg.chat.id, 'more?', opts)
		})
	})
}