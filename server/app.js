if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const mongoose = require('mongoose')
const mongodb = process.env.MONGO_ATLAS || 'mongodb://localhost:27017/'
let dbName

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  dbName = 'rekomtek-' + process.env.NODE_ENV
}

mongoose.connect(mongodb + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(success => {
    console.log('connected on MongoDB ' + mongodb + dbName)
  })

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', router)
  .use(errorHandler)

module.exports = app