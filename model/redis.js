const redis = require('redis')
const client = redis.createClient({
  url: process.env.REDISCLOUD_URL
})
const bluebird = require('bluebird')
bluebird.promisifyAll(redis)

module.exports = client
