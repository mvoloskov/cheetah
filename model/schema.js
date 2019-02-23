const mongoose = require('mongoose')
const redis = require('redis')
const bluebird = require('bluebird')
const client = redis.createClient({
  url: process.env.REDISCLOUD_URL
})
bluebird.promisifyAll(redis)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
})

const user = mongoose.model('user', {
  id: String,
  login: String,
  password: String
})

const entry = mongoose.model('entry', {
  id: String,
  user: String,
  data: Object
})

const filter = {
  __v: false,
  _id: false
}

module.exports = {
  user,
  entry,
  filter,
  redis: client
}
