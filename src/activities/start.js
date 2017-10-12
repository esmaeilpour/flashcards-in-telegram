import strings from '../data/strings'

export default function(bot, db) {
	bot.createActivity('start', activity => {

		activity.on('home', async msg => {
			let opts = {
				reply_markup: JSON.stringify({
					keyboard: activity.keyboards,
					resize_keyboard: true,
				})
		    }

			bot.sendMessage(msg.chat.id, 'start', opts)
		})

		activity.on(strings.learn, ['learn', 'home'])
		activity.on(strings.review, ['review', 'home'])
	})
}