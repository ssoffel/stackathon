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
    defaultValue: 0,
  },
  sellPrice: {
    type: Sequelize.DECIMAL(10, 4),
    defaultValue: 0,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
})


module.exports = Portfolio
