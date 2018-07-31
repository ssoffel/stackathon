export const getPositions = (dailyOrders, symbol) => {
  var amount = 0;
  var costOfShares = 0;

  dailyOrders.forEach( trade => {

    if (trade.symbol === symbol){

        amount += Number(trade.amount)

        costOfShares += Number(trade.costOfShares)


     }
  })
  let avgPrice = costOfShares / amount
   


  return { amount, costOfShares, avgPrice }

}
