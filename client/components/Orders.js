/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllOrders } from '../store/orders'


class Orders extends Component {


  componentDidMount() {
   this.props.getAllOrders()
  }



  render() {

   if(!this.props.orders){
     return<div>Loading...</div>
   }

    return (
      <div>

      <div className='row container'>
        <table id='header' className="striped " >
           <thead id='ordersHead'>
             <tr>
                 <th className='left-align'>Stock</th>
                 <th className='left-align'>Sector</th>
                 <th className='left-align'>Action</th>
                 <th className='left-align'>Price</th>
                 <th className='left-align'>Shares</th>
                 <th className='left-align'>TimeStamp</th>
             </tr>
           </thead>
          <tbody id='ordersBody'>
           {
              this.props.orders.map((order) =>  {
                return (
              <tr key={order.id}>
               <td>{order.symbol}</td>
               <td>{order.sector}</td>
               <td>{order.buyPrice === '0.0000' ? 'SELL' : 'BUY'}</td>
               <td>{order.buyPrice === '0.0000' ? order.sellPrice : order.buyPrice}</td>
               <td>{order.amount}</td>
               <td>{order.createdAt}</td>
              </tr>
           )})
           }

           </tbody>
         </table>
         </div>
         </div>
          )
        }
      }


const mapStateToProps = state => ({
  orders: state.orders.allOrders
})

const mapDispatchToProps = dispatch => ({
  getAllOrders: () => dispatch(getAllOrders())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders)
