const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const { response } = require('./helper')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 2000

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan("combined"))

app.get('/', (req, res) => {
  res.status(200).json(response.set(true, "Successful connected to API", null))
})

app.use((error, req, res, next) => {
  res.status(500).json(response.set(false, error.message, null))
})

require('./router')(app)

app.listen(port, () => {
  console.log(`Magic at ${port}`)
})
