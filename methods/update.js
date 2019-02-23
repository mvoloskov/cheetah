const { entry, filter } = require('../model')
const { ok, err } = require('../responses')

module.exports = async (req, res) => {
  const { id, data } = req.body

  try {

    await entry.findOneAndUpdate({ id }, { data }).exec()
    res.status(200).json(ok())

  } catch (e) {
    res.status(500).json(err(e))
  }
}
