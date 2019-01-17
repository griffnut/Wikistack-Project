const router = require('express').Router()
const bodyParse = require('body-parser')
const layout = require('../views/layout')
const sequelize = require('sequelize')
const models = require('../models');

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    const strLayout = layout("Hello World!")
    res.send(strLayout)
})