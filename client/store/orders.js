import axios from 'axios'

const GOT_ORDER = 'GOT_ORDER'
const GOT_ALL_ORDERS = 'GOT_ALL_ORDERS'

 const initialState = {
     allOrders: []
 }


export const gotOrder = order => ({
  type: GOT_ORDER,
  order
})

export const gotAllOrders = orders => ({
  type: GOT_ALL_ORDERS,
  orders
})


export const getAllOrders = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/portfolio`)
      const orders = response.data
      dispatch(gotAllOrders(orders))
    } catch (error) { console(error) }
  }
}


export const postOrder = (order) =>  {
  return async dispatch => {
    try {
    const response = await axios.post(`/api/portfolio`, order)
    const newOrder = response.data;
    dispatch(gotOrder(newOrder))
   } catch (error) { console(error) }
  }
}




const orderReducer = (state = initialState, action) => {


  switch (action.type){
    case GOT_ORDER: {
      return  {
        ...state,
        allOrders: [...state, action.order]
      }
  }
  case GOT_ALL_ORDERS: {
    return  {
      ...state,
      allOrders: action.orders
    }
}
  default:
  return state
 }
}


export default orderReducer
