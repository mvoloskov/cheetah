const { err } = require('../responses')
const getUser = require('../model/getUser')

module.exports = async (req, res, next) => {
  const { login } = req.body

  try {

    // check whether user exists
    const response = await getUser({ login }).exec()

    if (response) {
      next()
    } else {
      res.status(409).json(err('That user doesn\'t exist'))
    }

  } catch (e) {
    res.status(500).json(err(e))
  }
}
