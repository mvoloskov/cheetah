const removeEntry = require('../model/removeEntry')
const { ok, err } = require('../responses')

module.exports = async (req, res) => {
  const { id } = req.body

  try {

    await removeEntry(id).exec()
    res.status(200).json(ok())

  } catch (e) {
    res.status(500).json(err('Internal server error'))
  }
}
