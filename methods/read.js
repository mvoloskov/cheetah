const { entry, filter } = require('../model')
const { ok, err } = require('../responses')

module.exports = async (req, res) => {
  const id = req.body.id
  const query = id ?
    entry.findOne({ id }, filter) :
    entry.find({}, filter)

  try {

    const entries = await query.exec()
    res.status(200).json(ok({
      data: entries
    }))

  } catch (e) {
    res.status(404).json(err(e))
  }
}
