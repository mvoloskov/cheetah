const addEntry = require('../model/addEntry')
const { ok, err } = require('../responses')

module.exports = async (req, res) => {
  const { data } = req.body

  try {

    await addEntry(data).save()
    res.status(201).json(ok())

  } catch (e) {
    res.status(500).json(err('Internal server error'))
  }
}
