import axios from 'axios'

const GOT_DAILY_ORDER = "GOT_DAILY_ORDER"
const GOT_ALL_DAILY_ORDERS = 'GOT_ALL_DAILY_ORDERS'
const UPDATED_ORDER = 'UPDATED_ORDER'

const initialState = {
  daily: []
}

export const gotDailyOrder = order => ({
  type: GOT_DAILY_ORDER,
  order
})

export const gotAllDailyOrders = orders => ({
  type: GOT_ALL_DAILY_ORDERS,
  orders
})

export const updatedOrder = order => ({
  type: UPDATED_ORDER,
  order
})

export const postDailyOrder = (order) => {
  return async dispatch => {
    try{
      const response = await axios.post(`/api/daily`, order)
      const newOrder = response.data;
      dispatch(gotDailyOrder(newOrder))
    } catch (error) { console(error) }
  }
}

export const loadAllDailyOrders = (userId) => {
  return async dispatch => {
    try{
      const response = await axios.get(`/api/daily/${userId}`)
      const allOrders = response.data;
      dispatch(gotAllDailyOrders(allOrders))
    } catch (error) { console(error) }
  }
}

export const updateOrder = (order) => {
  return async dispatch => {
    try{
      const response = await axios.put(`/api/daily/${order.id}`, order)
      const updated = response.data;
      dispatch(updatedOrder(updated))
    } catch (error) { console(error) }
  }
}

const dailyPLReducer = (state = initialState, action) => {

  switch (action.type){
    case GOT_DAILY_ORDER: {
      return {

      daily: [...state.daily, action.order]
     }
   }
    case GOT_ALL_DAILY_ORDERS: {
     return {
       ...state,
       daily: action.orders
     }
   }
   case UPDATED_ORDER: {
     const newOrders = state.daily.filter(
       order => order.id !== action.order.id
     )
     return {
       ...state,
       daily: [...newOrders, action.order ]
     }
   }
    default:
    return state
  }

}



export default dailyPLReducer
