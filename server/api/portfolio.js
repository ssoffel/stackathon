const router = require('express').Router()


const { Portfolio } = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
    const orders = await Portfolio.findAll()
    res.json(orders)
  }
)

router.post('/', async (req, res, next) => {
  console.log("Im in post route")
  const newOrder = await Portfolio.create(req.body)
  res.json(newOrder)
})
