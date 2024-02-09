// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()


// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// LANGUAGES
const languagesController = require('./controllers/languages_controller.js')
app.use('/languages', languagesController)

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Hello World! API')
})

// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('connected to mongo: ', process.env.MONGO_URI))