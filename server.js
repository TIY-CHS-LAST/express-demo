const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const personDal = require('./dal')
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

app.get('/people', function (request, response) {
  const people = personDal.getPeople()
  response.render('list', { people: people })
})

app.get('/createPerson', function (request, response) {
  response.render('createPerson')
})
app.post('/people', function (request, response) {
  personDal.addPerson(request.body)

  response.redirect('/people')
})
// POST ~ Create
// PUT ~ Update
// DELETE ~ delete removing
// http://localhost:3000/people/23532/whatsup/hello/goodbye
app.get('/people/:personId', function (request, response) {
  console.log('request.params', request.params)
  const person = personDal.getPerson(request.params.personId)
  if (person.id) {
    response.render('personDetail', person)
  } else {
    response.send('NO People!!!')
  }
})
app.put('/people/:personId', function (request, response) {
  console.log('request body', request.body)
  personDal.updatePerson(request.body)
  const personId = request.params.personId
  response.send('it worked')
  // response.redirect(`/people`)
})
app.get('/people/:personId/update', function (request, response) {
  const chosenPerson = personDal.getPerson(request.params.personId)
  response.render('updatePerson', chosenPerson)
})

app.delete('/people/:personId', function (request, response) {
  personDal.removePerson(request.params.personId)
  response.redirect('/createPerson')
})
app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('Application has started at port 3000')
})
