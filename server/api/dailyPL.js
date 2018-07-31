const router = require('express').Router()


const { DailyPL } = require('../db/models')

module.exports = router

router.get('/:id', async (req, res, next) => {
    const response = await DailyPL.findAll({
      where: {
        userId: req.params.id
      }
    })
    res.json(response)
  }
)
router.post('/', async (req, res, next) => {
  const newOrder = await DailyPL.create(req.body)
  res.json(newOrder)
})

router.put('/:id', async (req, res, next) => {
  const updated = await DailyPL.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
  res.json(updated[1][0].dataValues)
})
