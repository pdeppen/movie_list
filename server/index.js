const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// connect to db
const mongoose = require('./config/db')

const PORT = 4000

const app = express()

app.use(cors())
app.use(bodyParser.json())

// movie routes
const movies = require('./routes/api/movies')

// use routes
app.use('/api/movies', movies)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

