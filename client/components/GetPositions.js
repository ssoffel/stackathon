export const getPositions = (dailyOrders, symbol) => {
  var amount = 0;
  var costOfShares = 0;
  console.log("dailyOrders inside of get positions", dailyOrders)
  dailyOrders.forEach( trade => {

    if (trade.symbol === symbol){

        amount += Number(trade.amount)

        costOfShares += Number(trade.costOfShares)


     }
  })
  let avgPrice = costOfShares / amount
  console.log("this is return of getPositions", amount, costOfShares, avgPrice)



  return { amount, costOfShares, avgPrice }

}
