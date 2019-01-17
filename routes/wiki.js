const router = require('express').Router()
const bodyParse = require('body-parser')
const layout = require('../views/layout')
const sequelize = require('sequelize')
const models = require('../models');

router.get('/', (req, res) => {
    res.send('got to GET /wiki/')
})

router.post('/', (req, res) => {
    res.send('got to POST /wiki/')
})

router.get('/add', (req, res) => {
    res.send('got to GET /wiki/add')
})

module.exports = router;