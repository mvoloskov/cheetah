const { user } = require('../model')
const { ok, err } = require('../responses')

const nanoid = require('nanoid')
const bcrypt = require('bcrypt')
const redis = require('../model/redis')

module.exports = async (req, res) => {
  const { login, password } = req.body
  try {

    const token = nanoid()
    const { id } = await user.findOne({ login })
    await redis.setAsync(token, id)

    setTimeout(async () => {
      await redis.delAsync(token)
    }, parseInt(process.env.TOKEN_LIFETIME))

    res.status(201).json(ok({ token }))

  } catch (e) {
    res.status(404).json(err(e))
  }
}
