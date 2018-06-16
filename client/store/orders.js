import axios from 'axios'

const GOT_ORDER = 'GOT_ORDER'

 const initialState = {
     allOrders: []
 }


export const gotOrder = order => ({
  type: GOT_ORDER,
  order
})


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
  default:
  return state
 }
}


export default orderReducer
