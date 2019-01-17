const router = require('express').Router()
const layout = require('../views/layout')
const { addPage } = require('../views')
const sequelize = require('sequelize')
const { Page } = require('../models');

router.get('/', (req, res) => {
    res.send('got to GET /wiki/')
})

router.post('/', (req, res, next) => {
    console.log(req)
    res.json(req.body)
})

router.get('/add', (req, res) => {
    res.send(addPage())
})

module.exports = router;