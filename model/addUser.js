const { user } = require('./schema')
const nanoid = require('nanoid')

module.exports = data => new user({
  id: nanoid(),
  ...data
})
