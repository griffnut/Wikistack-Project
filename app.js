const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParse = require('body-parser')
const html = require('html-template-tag')
const layout = require('./views/layout')

app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    const strLayout = layout("Hello World!")
    res.send(strLayout)
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`App is listening in port ${PORT}`)
})