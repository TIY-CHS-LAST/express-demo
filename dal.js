// data access layer
let people = require('./people')

function getPeople () {
  return people
}
function getPerson (personId) {
  // let chosenPerson = {}
  // for (let i = 0; i < people.length; i++) {
  //   if (people[i].id === personId) {
  //     chosenPerson = people[i]
  //   }
  // }
  // predicate returns truthy/falsy basedon some condition
  const chosenPerson = people.find(function (person, idx, arr) {
    return person.id === personId
  })

  return chosenPerson
}

function addPerson (newPerson) {
  people.unshift(newPerson)
  console.log('Successfully added person', newPerson)
  return people
}

function removePerson (personId) {
  // people.slice(idx, howMany)
  const newArrayOfPeople = people.filter(function (person, idx, arr) {
    return person.id !== personId
  })
  people = newArrayOfPeople
  console.log('Successfully remove person', personId)
  return people
}

function updatePerson (updatedPerson) {
  const newArray = people.filter(function (person, idx, arr) {
    return updatedPerson.id !== person.id
  })
  newArray.push(updatedPerson)
  people = newArray
  
  console.log('Successfully updated person', updatedPerson)
  return people
}

// addPerson, removePerson, updatePerson
module.exports = {
  getPeople: getPeople,
  getPerson: getPerson,
  updatePerson: updatePerson,
  addPerson: addPerson,
  removePerson: removePerson
}
