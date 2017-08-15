const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const kittyDal = require('./dal')

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.use(express.static('public'))

// routes
app.get('/', function (request, response) {
  response.render('home', { name: 'calvin' })
})

app.get('/kittehs', function (request, response) {
  const kittehs = kittyDal.getKitties()
  response.render('list', { kittehs: kittehs })
})

app.get('/kittehs/:id', function (request, response) {
  const chosenKitty = kittyDal.getKitty(request.params.id)
  if (chosenKitty.id) {
    response.render('kittyDetail', chosenKitty)
  } else {
    response.send('NO KITTEHS!!!')
  }
})
app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('Application has started at port 3000')
})
