const express = require('express')
const routes = express.Router()

const CidController = require('./controllers/CidController')
routes.get('/cids', CidController.index)
routes.get('/cids/:id', CidController.show)
routes.post('/cids', CidController.store)
routes.put('/cids/:id', CidController.update)
routes.delete('/cids/:id', CidController.destroy)


module.exports = routes