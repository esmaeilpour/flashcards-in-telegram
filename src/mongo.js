import mongo from 'mongodb'

export default async function(uri) {
  return await mongo.MongoClient.connect(uri)
}

export const ObjectId = mongo.ObjectId