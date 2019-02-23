require('dotenv').config()
const app = require('express')()
const bodyParser = require('body-parser')
const methods = require('./methods')
const middleware = require('./middleware')

app.use(bodyParser.json())

app.post('/', middleware.checkBody(['data']), methods.create)
app.get('/', methods.read)
app.put('/', middleware.checkBody(['id', 'data']), methods.update)
app.delete('/', middleware.checkBody(['id']), methods.remove)

app.post('/signup',
  middleware.checkBody(['login', 'password']),
  middleware.checkLogin,
  methods.signup
)

app.post('/signin',
  middleware.checkBody(['login', 'password']),
  middleware.checkUser,
  middleware.checkPassword,
  methods.signin
)

const port = process.env.PORT
app.listen(port, () => console.log('Server is up on port ' + port))
