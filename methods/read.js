const { getEntries } = require('../model')
const { ok, err } = require('../responses')

module.exports = async (req, res) => {
  const { id } = req.body

  try {

    const data = await getEntries(id ? { id } : {})
    res.status(200).json(ok({ data }))

  } catch (e) {
    res.status(404).json(err(e))
  }
}
