'use strict'
const Sequelize = require('sequelize')
const db = require('../db')

const DailyPL = db.define('dailyPL', {
  symbol: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  amount: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0,
  },
  costOfShares: {
    type: Sequelize.DECIMAL(15, 2),
    defaultValue: 0,
  },
  avgPrice: {
    type: Sequelize.DOUBLE,
    defaultValue: 0,
  }

})


module.exports = DailyPL
