const updateEntry = require('../model/updateEntry')
const { ok, err } = require('../responses')

module.exports = async (req, res) => {
  const { id, data } = req.body

  try {

    await updateEntry(id, data).exec()
    res.status(200).json(ok())

  } catch (e) {
    res.status(500).json(err('Internal server error'))
  }
}
