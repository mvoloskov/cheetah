const addUser = require('../model/addUser')
const getUser = require('../model/getUser')
const setToken = require('../model/setToken')
const { ok, err } = require('../responses')
const nanoid = require('nanoid')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
  const { login, password } = req.body

  try {

    // hash password and save user with a password equals to that hash
    const hash = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
    await addUser({ login, password: hash }).save()

    // get fresly created user's id, generate a token and tie them together
    const { id } = await getUser({ login }).exec()
    const token = nanoid()
    await setToken(token, id)

    res.status(201).json(ok({ token }))

  } catch (e) {
    res.status(500).json(err('Internal server error'))
  }
}
