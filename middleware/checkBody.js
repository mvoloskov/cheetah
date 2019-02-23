const { err } = require('../responses')

module.exports = keys => (req, res, next) => {
  const body = req.body

  // check if body contains all the required fields
  // if you're using this middleware, body shouldn't be empty
  if (body) {

    // check all the required keys, and if one of them is absent, return error
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
