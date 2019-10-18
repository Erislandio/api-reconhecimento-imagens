const express = require('express')
const routes = express.Router()
const analyzeImageFileController = require('../app/controllers/imageController')

routes.get('/analyzeimagefile', analyzeImageFileController.anaalyzeImageFIle)

module.exports = routes