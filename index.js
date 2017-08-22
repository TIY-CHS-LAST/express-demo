const app = require('./server')

app.listen(app.get('port'), function () {
  console.log(`Server Started and listening on port ${app.get('port')}`)
})
