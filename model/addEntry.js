const { entry } = require('./schema')
const nanoid = require('nanoid')

module.exports = data => new entry({
  id: nanoid(),
  data
})
