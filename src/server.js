const http = require('http')
const express = require('express')
const routesV1 = require('../src/routes/v1')
const Youch = require('youch')

class App {
  constructor() {
    this.app = express()
    this.server = http.Server(this.app)

    this.middlewares()
    this.routes()
    this.exceptionHandler()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  routes() {
    this.app.use(routesV1)
  }

  exceptionHandler() {
    /**
     * Colocando um middle de 4 parametros, o express entende que eh um middleware de excecao e joga neste middle aqui
     */
    this.app.use(async (err, req, res, next) => {
      console.error('Entrou no handkerException')
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON()
        return res.status(500).json(errors)
      }
      return res.status(500).json({ error: 'Internal server error.' })
    })
  }
}

module.exports = new App().server
