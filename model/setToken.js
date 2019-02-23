const { redis } = require('./schema')

module.exports = (token, id) => {

  // set a self-destructive timer for token
  setTimeout(async () => {
    await redis.delAsync(token)
  }, process.env.TOKEN_LIFETIME)

  return redis.setAsync(token, id)
}
