const { user } = require('../../model')
const { ok, err } = require('./view')
const nanoid = require('nanoid')
const bcrypt = require('bcrypt')
const redis = require('../../model/redis')

module.exports = async (req, res) => {
  const { login, password } = req.body

  if (login && password) {

    try {

      const data = await user.findOne({ login })

      if (data) {

        const passwordIsRight = await bcrypt.compare(password, data.password)

        if (passwordIsRight) {

            const token = nanoid()

            await redis.setAsync(token, data.id)

            setTimeout(async () => {
              await redis.delAsync(token)
            }, parseInt(process.env.TOKEN_LIFETIME))

            res.status(201).json(ok(token))

        } else {
          res.status(401).json(err('Wrong password'))
        }

      } else {
        res.status(404).json(err('That user doesn\'t exist'))
      }

    } catch (e) {
      res.status(404).json(err(e))
    }
  } else {
    res.status(400).json(err('You have to send login and password'))
  }

}
