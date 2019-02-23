const { err } = require('../responses')

module.exports = keys => (req, res, next) => {
  const body = req.body
  if (body) {

    (keys || []).forEach(key => {
      if (!body[key]) {
        res.status(400).json('You should provide ' + key)
      }
    })

    next()

  } else {
    res.status(400).json(err('Body can\'t be empty'))
  }
}
