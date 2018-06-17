
 var stocks = {}

 const orders = [
   { symbol: 'UA', amount: 500},
   { symbol: 'UA', amount: 500},
   { symbol: 'NKE', amount: 500},
   { symbol: 'NKE', amount: 500},
   { symbol: 'TSLA', amount: 500},
   { symbol: 'XOM', amount: 500},
   { symbol: 'XOM', amount: 500},
   { symbol: 'XOM', amount: 500},
 ]

orders.forEach(order => {
  if(stocks[order.symbol]){
    var shares = order.amount
    stocks[order.symbol] += shares
  } else {
    stocks[order.symbol] = order.amount
  }

})
var ordersAggregator = []
 Object.keys(stocks).forEach(function(key, index){
    ordersAggregator.push({[key]: stocks[key]})
 })
console.log("stocks", ordersAggregator)
