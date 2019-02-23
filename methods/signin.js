const { getUser, setToken } = require('../model')
const { ok, err } = require('../responses')
const nanoid = require('nanoid')

module.exports = async (req, res) => {
  const { login, password } = req.body
  try {
    const token = nanoid()
    const { id } = await getUser({ login }).exec()
    await setToken(token, id)
    res.status(201).json(ok({ token }))

  } catch (e) {
    res.status(500).json(err(e))
  }
}
