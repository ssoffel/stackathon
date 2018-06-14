const User = require('./user')
const StockList = require('./StockList')
const Portfolio = require('./Portfolio')


console.log(StockList, "what is stockList")
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 */
 Portfolio.belongsTo(User)
 User.hasOne(Portfolio)







/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  StockList,
  Portfolio
}
