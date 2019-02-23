const { err } = require('../responses')
const { getUser } = require('../model')

module.exports = async (req, res, next) => {
  const { login } = req.body

  try {
    
    const response = await getUser({ login }).exec()

    if (!response) {
      next()
    } else {
      res.status(409).json(err('That user already exists'))
    }

  } catch (e) {
    res.status(500).json(err(e))
  }
}
