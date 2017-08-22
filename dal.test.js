const dal = require('./dal')

describe('Our People Data Model API', function () {
  // getPeople
  test('getPeople method should return an array of people', function () {
    expect(typeof dal.getPeople).toBe('function')
    expect(typeof dal.getPeople()).toBe(typeof [])
  })
  // getPerson
  test('getPerson should return an object of a person', function () {
    const id = '5ff5f12f-4795-4f58-bd46-051d3272a146'
    expect(typeof dal.getPerson).toBe('function')
    expect(typeof dal.getPerson(id)).toBe('object')
    const person = dal.getPerson(id)
    expect(person.name).toBe('Dwight Klein')
    expect(person.email).toBe('Susanna9@hotmail.com')
  })
})
