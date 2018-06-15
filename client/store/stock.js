
const UA = 'UA'
const NK = 'NK'

const initialState = {
  UAA: {},
  NKE: {}
  }

export const loadStockUAA = stockObj => ({
  type: UA,
  stockObj
})

export const loadStockNKE = stockObj => ({
  type: NK,
  stockObj
})


export const loadStocksThunk = (message) => dispatch => {
  if(message.symbol === "UAA"){
    console.log("AA Message", message)
    dispatch(loadStockUAA(message))
  } else {
    console.log("NK Message", message)
    dispatch(loadStockNKE(message))
  }

}

const stockReducer = (state = initialState, action) => {


  switch (action.type){
    case UA: {

    return Object.assign({}, state, {
        UAA: action.stockObj
      }
    )
  }
    case NK: {
      return Object.assign({}, state, {
          NKE: action.stockObj
        }
      )
    }

  default:
  return state
 }
}


export default stockReducer
