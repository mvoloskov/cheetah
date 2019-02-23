require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const create = require('./methods/create')
const read = require('./methods/read')
const update = require('./methods/update')
const remove = require('./methods/delete')

const signup = require('./methods/signup')

app.use(bodyParser.json())

app.post('/', create)
app.get('/', read)
app.put('/', update)
app.delete('/', remove)

app.post('/signup', signup)

app.listen(process.env.PORT, () => console.log('Server is up on port ' + process.env.PORT))
