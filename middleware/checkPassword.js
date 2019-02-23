const { user } = require('../model')
const { ok, err } = require('../responses')

const bcrypt = require('bcrypt')
const redis = require('../model/redis')

module.exports = async (req, res, next) => {
  const { login, password } = req.body

    try {
      const response = await user.findOne({ login }).exec()
      const passwordIsRight = await bcrypt.compare(password, response.password)

      if (passwordIsRight) {
        next()
      } else {
        res.status(401).json(err('Wrong password'))
      }

    } catch (e) {
      res.status(500).json(err(e))
    }
}
