
const UAA = 'UAA'

const initialState = {

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
     data: action.stockObj
    }
  }
  default:
  return state
 }
}


export default stockReducer
