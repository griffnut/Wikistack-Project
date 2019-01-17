const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParse = require('body-parser')
const html = require('html-template-tag')
const layout = require('./views/layout')
const sequelize = require('sequelize')
const models = require('./models');

app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))

app.use('/wiki', require('./routes/wiki'))
app.use('/user', require('./routes/user'))


const PORT = 3000

const init = async() => {
    await models.db.sync();

    app.listen(PORT, () => {
        console.log(`App is listening in port ${PORT}`)
    })
}

init();