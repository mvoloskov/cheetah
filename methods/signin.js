const getUser = require('../model/getUser')
const setToken = require('../model/setToken')
const { ok, err } = require('../responses')
const nanoid = require('nanoid')

module.exports = async (req, res) => {
  const { login, password } = req.body

  try {

    // generate token and tie it to user id
    const token = nanoid()
    const { id } = await getUser({ login }).exec()
    await setToken(token, id)
    
    res.status(201).json(ok({ token }))

  } catch (e) {
    res.status(500).json(err('Internal server error'))
  }
}
