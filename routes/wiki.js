const router = require('express').Router()
const layout = require('../views/layout')
const { addPage } = require('../views')
const sequelize = require('sequelize')
const { Page } = require('../models');

router.get('/', (req, res) => {
    res.send('got to GET /wiki/')
})

router.post('/', async (req, res, next) => {
    // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();

    console.log(page)
    res.redirect('/');
  } catch (error) { next(error) }
})

router.get('/add', (req, res) => {
    res.send(addPage())
})

module.exports = router;