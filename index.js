require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const create = require('./controller/create')
const read = require('./controller/read')
const update = require('./controller/update')

app.use(bodyParser.json())

app.post('/', create)
app.get('/', read)
app.put('/', update)

app.listen(process.env.PORT, () => console.log('Server is up on port ' + process.env.PORT))
