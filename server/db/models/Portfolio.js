'use strict'
const Sequelize = require('sequelize')
const db = require('../db')

const Portfolio = db.define('portfolio', {
  symbol: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  sector: {
   type: Sequelize.STRING,
  },
  buyPrice: {
    type: Sequelize.DECIMAL(10, 4),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0,
    },
  },
  sellPrice: {
    type: Sequelize.DECIMAL(10, 4)
  },
})


module.exports = Portfolio
