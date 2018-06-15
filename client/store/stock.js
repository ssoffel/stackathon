
const UAA = 'UAA'
const NKE = 'NKE'

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
