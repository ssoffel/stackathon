export const processOrder = (direction, symbol, price, state, daily, userId) => {





var amount;
var order;
var sector;
var tempState;
var costOfShares = 0
switch (symbol) {
      case 'UAA':
        amount = direction === 'BUY' ? state.UAA : (state.UAA * -1)
        sector = 'Consumer Durable Apparel'
        tempState = {...state.UAA_daily};


           costOfShares = Number(amount * price)

        break
      case "NKE":
        amount = direction === 'BUY' ? state.NKE : (state.NKE * -1)
        sector = 'Consumer Durable Apparel'
        tempState = {...state.NKE_daily};

        costOfShares = Number(amount * price)

        break
      case "GS":
       amount = direction === 'BUY' ? state.GS : (state.GS * -1)
       sector = "Banking"
       tempState = {...state.GS_daily};

       costOfShares = Number(amount * price)

       break
      case "MS":
       amount = direction === 'BUY' ? state.MS : (state.MS * -1)
       sector = "Banking"
       tempState = {...state.MS_daily};

       costOfShares = Number(amount * price)

       break
      case "XOM":
      amount = direction === 'BUY' ? state.XOM : (state.XOM * -1)
      sector = "Energy"
      tempState = {...state.XOM_daily};

      costOfShares = Number(amount * price)

      break
      case "TWTR":
      amount = direction === 'BUY' ? state.TWTR : (state.TWTR * -1)
      sector = 'Software Services'
      tempState = {...state.TWTR_daily};

      costOfShares = Number(amount * price)



         break
      case "TSLA":
      amount = direction === 'BUY' ? state.TSLA : (state.TSLA * -1)
      sector = 'Automotive'
      tempState = {...state.TSLA_daily};

      costOfShares = Number(amount * price)



         break
     default:
        amount = 0
    }
    if (direction === "BUY") {
     const buyPrice = price
           order = { symbol, sector, buyPrice, amount, userId }
    } else {
      const sellPrice = price
           order = { symbol, sector, sellPrice, amount, userId }
    }

    let orderDaily = { symbol, amount, avgPrice: price, costOfShares, userId}


    return [order, orderDaily, tempState]

}
