const express = require('express')
const router = express.Router()
const Busboy = require('busboy')
const path = require('path')
const fs = require('fs-extra')

router
  .route('/')
  .get(function (request, response) {
    response.render('upload')
  })
  .post(function (request, response) {
    const busboy = new Busboy({ headers: request.headers })

    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
      const saveTo = path.join('./public/uploads/', path.basename(filename))
      file.pipe(fs.createWriteStream(saveTo))
    })
    busboy.on('finish', function () {
      response.writeHead(200, { Connection: 'close' })
      response.end('Uploaded file to: /uploads')
    })
    // Parse HTTP-POST upload
    return request.pipe(busboy)
  })

module.exports = router
