const app = require('./server')

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `server ${process.env.NODE_ENV} on port ${process.env.PORT || 3000}`
  )
})
