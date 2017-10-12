import configs from './configs'
import Bot from 'tgux'
import mongo, {ObjectId} from './mongo'
import cache from './cache'
import activities from './activities'

async function main () {
	var db = await mongo(configs.mongo.uri)

	cache.prototype.storage = db

	var bot = new Bot(configs.telegram.token, {polling: true})

	bot.setCacheHandler(cache)

	for (let activity of activities) {
		activity(bot, db)
	}
}

main()
