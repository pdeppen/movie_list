const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 4000

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

