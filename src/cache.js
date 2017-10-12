export default class {
	constructor() {
		this.data = {}
	}

	set(key, value) {
		var db = this.db
		return new Promise(resolve => {
			db.cache.update({_id: key}, {$set: {data: JSON.stringify(value)}}, {upsert: true})
			resolve(true)
		})
	}

	get(key) {
		var db = this.db
		return new Promise(resolve => {
			db.cache.find({_id: key}).next((err, doc) => {
				if (doc) {
					resolve(JSON.parse(doc.data))
				} else {
					return resolve(false)
				}
			})
		})
	}

	get db() {
		return {
			cache: this.storage.collection('cache')
		}
	}
}
