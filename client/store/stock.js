
const LOAD_STOCK = 'LOAD_STOCK'

const initialState = {
  }

export const loadStock = stockObj => ({
  type: LOAD_STOCK,
  stockObj
})

export const loadStocksThunk = (message) => dispatch => {
  console.log("in Thunk", message)
  dispatch(loadStock(message))
}

const stockReducer = (state = initialState, action) => {

  console.log("in Reducer", action.stockObj)
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
