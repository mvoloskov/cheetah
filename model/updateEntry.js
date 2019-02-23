const { entry } = require('./schema')

module.exports = (id, data) => entry.findOneAndUpdate({ id }, { data })
