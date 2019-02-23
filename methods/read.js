const getEntries = require('../model/getEntries')
const { ok, err } = require('../responses')

module.exports = async (req, res) => {
  const { id } = req.body

  try {

    // if id is supplied, query by id, otherwise query by
    // an empty object that'll lead to returning all entries
    const data = await getEntries(id ? { id } : {})
    
    res.status(200).json(ok({ data }))

  } catch (e) {
    res.status(500).json(err('Internal server error'))
  }
}
