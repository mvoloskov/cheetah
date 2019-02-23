const { entry, filter } = require('../../model')
const { ok, err } = require('./view')

module.exports = async (req, res) => {
  const id = req.body.id
  const query = id ?
    entry.findOne({ id }, filter) :
    entry.find({}, filter)

  try {

    const entries = await query.exec()

    res.status(201).json(ok(entries))

  } catch (e) {

    res.status(404).json(err(e))

  }
}
