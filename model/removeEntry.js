const { entry } = require('./schema')

module.exports = id => entry.findOneAndDelete({ id })
