const { user } = require('../../model')
const { ok, err } = require('./view')
const nanoid = require('nanoid')
const bcrypt = require('bcrypt')
const redis = require('../../model/redis')

module.exports = async (req, res) => {
  const { login, password } = req.body

  if (login && password) {

    try {
      
      const userAlreadyExists = await user.findOne({ login }).exec() !== null

      if (!userAlreadyExists) {

        try {

          const id = nanoid()
          const token = nanoid()
          const hash = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))

          await new user({
            id,
            login,
            password: hash
          }).save()

          await redis.setAsync(token, id)

          setTimeout(async () => {
            await redis.delAsync(token)
          }, parseInt(process.env.TOKEN_LIFETIME))

          res.status(201).json(ok(token))

        } catch (e) {
          res.status(404).json(err(e))
        }
      } else {
        res.status(409).json(err('That user already exists'))
      }
    } catch (e) {
      res.status(500).json(err('Internal server error'))
    }
  } else {
    res.status(400).json(err('You have to send login and password'))
  }

}
