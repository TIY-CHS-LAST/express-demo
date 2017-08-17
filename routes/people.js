const express = require('express')
const router = express.Router()
const personDal = require('../dal')

router
  .route('/')
  .all(function (req, res, next) {
    req.person = 'calvin'
    next()
  })
  .get(function (request, response) {
    const people = personDal.getPeople()
    response.render('list', { people: people })
  })
  .post(function (request, response) {
    personDal.addPerson(request.body)

    response.redirect('/people')
  })

router.route('/createPerson').get(function (request, response) {
  response.render('createPerson')
})
router.route(
  '/middleware/coolStuff',
  function (req, res, next) {
    req.sandwich = {}
    console.log('you are using middleware i made')
    next()
  },
  function (req, res, next) {
    req.sandwich.ingredients = [ 'bread' ]
    next()
  },
  function (req, res, next) {
    req.sandwich.ingredients.push('bologney')
    next()
  },
  function (req, res) {
    console.log('req.sandwich', req.sandwich)

    res.send('it worked')
  }
)
// POST ~ Create
// PUT ~ Update
// DELETE ~ delete removing
// http://localhost:3000/people/23532/whatsup/hello/goodbye
router
  .route('/:personId')
  .get(function (request, response) {
    console.log('request.params', request.params)
    const person = personDal.getPerson(request.params.personId)
    if (person.id) {
      response.render('personDetail', person)
    } else {
      response.send('NO People!!!')
    }
  })
  .put(function (request, response) {
    console.log('request body', request.body)
    personDal.updatePerson(request.body)
    const personId = request.params.personId
    response.send('it worked')
    // response.redirect(`/people`)
  })
  .delete(function (request, response) {
    personDal.removePerson(request.params.personId)
    response.status(200).send('success')
  })

router.route('/:personId/update').get(function (request, response) {
  const chosenPerson = personDal.getPerson(request.params.personId)
  response.render('updatePerson', chosenPerson)
})

module.exports = router
