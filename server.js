const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const peopleRoutes = require('./routes/people')
const uploadRoutes = require('./routes/upload')
const bodyParser = require('body-parser')

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.use(express.static('public'))

// set up bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// routes
app.get('/', function (request, response) {
  response.render('home', { name: 'calvin' })
})

app.use('/people', peopleRoutes)
app.use('/upload', uploadRoutes)
app.set('port', 3000)

module.exports = app
