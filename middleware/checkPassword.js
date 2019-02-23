const getUser = require('../model/getUser')
const { ok, err } = require('../responses')
const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
  const { login, password } = req.body

  try {

    // check whether password is right
    const response = await getUser({ login }).exec()
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
