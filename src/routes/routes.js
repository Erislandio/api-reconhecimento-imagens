const express = require('express')
const routes = express.Router()
const analyzeImageFileController = require('../app/controllers/imageController')

routes.post('/analyzeimagefile', analyzeImageFileController.analyzeImageFIle)

module.exports = routes