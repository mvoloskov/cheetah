const { entry } = require('../model')
const { ok, err } = require('../responses')
const nanoid = require('nanoid')

module.exports = async (req, res) => {
  const data = req.body.data

  try {

    await new entry({ id: nanoid(), data }).save()
    res.status(201).json(ok())

  } catch (e) {
    res.status(500).json(err(e))
  }
}
