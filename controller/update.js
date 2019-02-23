const { entry, filter } = require('../model')
const { ok, err } = require('../view/update')

module.exports = async (req, res) => {
  const id = req.body.id
  const data = req.body.data

  if (id && data) {

    try {

      const response = await entry.findOneAndUpdate({ id }, { data }).exec()

      res.status(200).json(ok())

    } catch (e) {

      res.status(404).json(err(e))

    }

  } else {
    res.status(400).json(err('You have to specify id and data'))
  }

}
