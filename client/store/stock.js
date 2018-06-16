
const UA = 'UA'
const NK = 'NK'
const GS = 'GS'
const MS = 'MS'
const XOM = 'XOM'
const TWTR = 'TWTR'
const TSLA = 'TSLA'

const initialState = {
     UAA: {},
     NKE: {},
     GS: {},
     MS: {},
     XOM: {},
     TWTR: {},
     TSLA: {}
 }



export const loadStockUAA = stockObj => ({
  type: UA,
  stockObj
})

export const loadStockNKE = stockObj => ({
  type: NK,
  stockObj
})

export const loadStockGS = stockObj => ({
  type: GS,
  stockObj
})

export const loadStockMS = stockObj => ({
  type: MS,
  stockObj
})

export const loadStockXOM = stockObj => ({
  type: XOM,
  stockObj
})

export const loadStockTWTR = stockObj => ({
  type: TWTR,
  stockObj
})

export const loadStockTSLA = stockObj => ({
  type: TSLA,
  stockObj
})


export const loadStocksThunk = (message) => dispatch => {
  switch(message.symbol){
    case 'UAA':
      console.log("UAA Message", message)
      dispatch(loadStockUAA(message))
      break
    case 'NKE':
      console.log("NKE Message", message)
      dispatch(loadStockNKE(message))
      break
    case 'GS':
      console.log("GS Message", message)
      dispatch(loadStockGS(message))
      break
    case 'MS':
      console.log("MS Message", message)
      dispatch(loadStockMS(message))
      break
    case 'XOM':
      console.log("XOM Message", message)
      dispatch(loadStockXOM(message))
      break
    case 'TWTR':
        console.log("TWTR Message", message)
        dispatch(loadStockTWTR(message))
        break
    case 'TSLA':
        console.log("TSLA Message", message)
        dispatch(loadStockTSLA(message))
        break
    default:
    }
  // if(message.symbol === "UAA"){
  //   console.log("AA Message", message)
  //   dispatch(loadStockUAA(message))
  // } else {
  //   console.log("NK Message", message)
  //   dispatch(loadStockNKE(message))
  // }

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
    case GS: {
      return Object.assign({}, state, {
          GS: action.stockObj
        }
      )
    }
    case MS: {
      return Object.assign({}, state, {
          MS: action.stockObj
        }
      )
    }
    case XOM: {
      return Object.assign({}, state, {
          XOM: action.stockObj
        }
      )
    }
    case TWTR: {
      return Object.assign({}, state, {
          TWTR: action.stockObj
        }
      )
    }
    case TSLA: {
      return Object.assign({}, state, {
          TSLA: action.stockObj
        }
      )
    }

  default:
  return state
 }
}


export default stockReducer
