const { entry, filter } = require('./schema')

module.exports = query => entry.find(query, filter)
