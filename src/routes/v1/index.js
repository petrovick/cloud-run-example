const express = require('express')
require('express-async-errors')

const testController = require('../../controllers/v1/test.controller')

const routes = express.Router()

const version = 'v1'

routes.get(`/api/${version}/test`, testController.index)

module.exports = routes
