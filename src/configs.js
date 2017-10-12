export default {
  mongo: {
    uri: process.env.MONGO_URI,
  },

  telegram: {
    token: process.env.TELEGRAM_TOKEN,
  },

  cardGroups: {
     1: 86400,
     2: 3 * 86400,
     3: 5 * 86400,
  },
}
