const { err } = require('../responses')
const { user } = require('../model')

module.exports = async (req, res, next) => {
  const { login } = req.body

  try {

    const response = await user.findOne({ login }).exec()

    if (response) {
      next()
    } else {
      res.status(409).json(err('That user doesn\'t exist'))
    }

  } catch (e) {
    res.status(500).json(err(e))
  }
}
