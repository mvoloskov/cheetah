const { addUser, getUser, setToken } = require('../model')
const { ok, err } = require('../responses')
const nanoid = require('nanoid')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
  const { login, password } = req.body

    try {

      const hash = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
      await addUser({ login, password: hash }).save()

      const { id } = await getUser({ login }).exec()
      const token = nanoid()
      await setToken(token, id)

      res.status(201).json(ok({ token }))

    } catch (e) {
      res.status(500).json(err(e))
    }

}
