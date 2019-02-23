const { entry, filter } = require('../model')
const { ok, err } = require('../responses')

module.exports = async (req, res) => {
  const id = req.body.id

  try {

    await entry.findOneAndDelete({ id }).exec()
    res.status(200).json(ok())

  } catch (e) {
    res.status(500).json(err(e))
  }
}
