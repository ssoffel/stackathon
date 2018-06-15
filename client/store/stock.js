
const UAA = 'UAA'
const NKE = 'NKE'

const initialState = {
     UAA: {
       symbol: "UA",
       sector: "consumerdurablesapparel",
       securityType: "commonstock",
       bidPrice: 0,
       bidSize: 0,
       askPrice: 0,
       askSize: 0,
       lastUpdated: 1529061919242,
       lastSalePrice: 0,
       lastSaleSize: 0,
       lastSaleTime: 0,
       volume: 0,
       marketPercent: 0,
     },
     NKE: {
       symbol: "NKE",
       sector: "consumerdurablesapparel",
       securityType: "commonstock",
       bidPrice: 0,
       bidSize: 0,
       askPrice: 0,
       askSize: 0,
       lastUpdated: 1529061919242,
       lastSalePrice: 0,
       lastSaleSize: 0,
       lastSaleTime: 0,
       volume: 0,
       marketPercent: 0,
     }
  }

export const loadStockUAA = stockObj => ({
  type: UAA,
  stockObj
})


export const loadStocksThunk = (message) => dispatch => {

     dispatch(loadStockUAA(message))


  }




const stockReducer = (state = initialState, action) => {

  console.log("in Reducer", action.stockObj)
  switch (action.type){
    case UAA: {
    return {
     UAA: action.stockObj
    }
  }
    case NKE: {
    return {
      NKE: action.stockObj
    }
  }
  default:
  return state
 }
}


export default stockReducer
