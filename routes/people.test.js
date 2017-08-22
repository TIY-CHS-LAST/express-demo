const request = require('supertest')
const app = require('../server')

describe('GET /people', function () {
  test('should return html page', function () {
    request(app).get('/').expect(200, function (err) {
      console.log(err)
    }).expect('Content-Type', 'text/html; charset=utf-8')
  })
})
