const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParse = require('body-parser')
const html = require('html-template-tag')
const layout = require('./views/layout')
const sequelize = require('sequelize')
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

app.use('/wiki', wikiRouter);
//app.use('/user', userRouter);

app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))
app.get('/', (req, res) => {
    res.redirect("/wiki")
})

const PORT = 3000

const init = async() => {
    await models.db.sync();

    app.listen(PORT, () => {
        console.log(`App is listening in port ${PORT}`)
    })
}

init();