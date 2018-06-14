'use strict'
const Sequelize = require('sequelize')
const db = require('../db')

const StockList = db.define('stocklist', {
  symbol: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  }

})


module.exports = StockList
