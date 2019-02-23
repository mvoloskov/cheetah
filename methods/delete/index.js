const { entry, filter } = require('../../model')
const { ok, err } = require('./view')

module.exports = async (req, res) => {
  const id = req.body.id

  if (id) {

    try {

      await entry.findOneAndDelete({ id }).exec()

      res.status(200).json(ok())

    } catch (e) {

      res.status(404).json(err(e))

    }

  } else {
    res.status(400).json(err('You have to specify id'))
  }

}
