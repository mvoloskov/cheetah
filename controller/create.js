const { entry } = require('../model')
const { ok, err } = require('../view/create')
const nanoid = require('nanoid')

module.exports = async (req, res) => {
  const data = req.body.data

  if (data) {
    try {

      const newEntry = await new entry({
        id: nanoid(),
        data
      }).save()

      res.status(201).json(ok())

    } catch (e) {

      res.status(404).json(err(e))

    }
  } else {
    res.status(400).json(err('The data field can\'t be empty'))
  }
}
