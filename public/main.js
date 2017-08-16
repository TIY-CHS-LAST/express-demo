function deleteUser (personId) {
  return fetch(`/people/${personId}`, { method: 'DELETE' }).then(function (
    response
  ) {
    return response.json()
  })
}

const deleteBtn = document.querySelectorAll('button[name="deleteUser"]')
deleteBtn.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    event.preventDefault()
    const id = event.target.getAttribute('data-id')

    deleteUser(id).then(function (res) {
      // remove from dom
    })
  })
})
