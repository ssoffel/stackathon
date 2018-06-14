const LOAD_STOCK = 'LOAD_STOCK'

const initialState = {
  data: {
      symbol: "UA",
      sector: "consumerdurablesapparel",
      securityType: "commonstock",
      bidPrice: 0,
      bidSize: 0,
      askPrice: 0,
      askSize: 0,
      lastUpdated: 1528920000000,
      lastSalePrice: 21.765,
      lastSaleSize: 100,
      lastSaleTime: 1528919998015,
      volume: 27912,
      marketPercent: 0.00919,
    }

}

export const loadStock = stockObj => ({
  type: LOAD_STOCK,
  stockObj
})

const stockReducer = (state = initialState, action) => {
  switch (action.type){
    case LOAD_STOCK: {
    return {
     data: action.stockObj
    }
  }
  default:
  return state
 }
}


export default stockReducer
