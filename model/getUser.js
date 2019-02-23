const { user, filter } = require('./schema')

module.exports = query => user.findOne(query, filter)
