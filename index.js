require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    ok: true
  })
})

app.listen(process.env.PORT, () => console.log('Server is up on port ' + process.env.PORT))
