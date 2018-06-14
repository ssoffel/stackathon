import axios from 'axios'

const GOT_STOCK_LIST = 'GOT_STOCK_LIST'

const initialState = {
  allStocks: []

}

export const gotStockList = (allStocks) => ({
  type: GOT_STOCK_LIST,
  allStocks
})

export const getStockList = () => {
  return async dispatch => {
    const data  = await axios.get('/api/stocklist')
    dispatch(gotStockList(data))

  }
}

const stockListReducer = (state = initialState, action) => {
  switch (action.type){
    case GOT_STOCK_LIST: {
    return {
     allStocks: action.stockList
    }
  }
  default:
  return state
 }
}


export default stockListReducer
