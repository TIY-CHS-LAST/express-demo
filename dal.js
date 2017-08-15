// data access layer
const kitties = require('./cats')

function getKitties () {
  return kitties
}

function getKitty (kittyId) {
  let chosenKitty = {}
  for (let i = 0; i < kitties.length; i++) {
    if (kitties[i].id === kittyId) {
      chosenKitty = kitties[i]
    }
  }
  return chosenKitty
}

function addKitty (newKitty) {
  kitties.push(newKitty)
  return kitties
}

function deleteKitty () {
}

function updateKitty () {
}

module.exports = {
  getKitties: getKitties,
  getKitty: getKitty,
  addKitty: addKitty,
  deleteKitty: deleteKitty,
  updateKitty: updateKitty
}
