const router = require('express').Router()


const { Portfolio } = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
    const orders = await Portfolio.findAll()
    res.json(orders)
  }
)

router.get('/:id', async (req, res, next) => {
    const orders = await Portfolio.findAll({
      where: {
        userId: req.params.id
      }
    })
    res.json(orders)
  }
)

router.post('/', async (req, res, next) => {

  const newOrder = await Portfolio.create(req.body)
  res.json(newOrder)
})
