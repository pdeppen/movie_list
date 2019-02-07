const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId;

// testing router
router.get('/', (req, res) => {
    res.json({message: "Hello from router"})
})

module.exports = router