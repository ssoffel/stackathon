const router = require('express').Router()


const { StockList } = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
    const list = await StockList.findAll()
    res.json(list)
  }
)
