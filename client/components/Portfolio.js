/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllAggregatedOrders } from '../store/orders'


class Portfolio extends Component {

  constructor(){
    super()
    this.state = {
      UAA: "",
      NKE: "",
      GS: "",
      MS: "",
      XOM: "",
      TWRT: "",
      TSLA: ""
    }
  }



  componentDidMount() {
    this.props.getAllAggregatedOrders()
    this.setState({
      UAA: this.props.stockUAA,
      NKE: this.props.stockNKE,
      GS: this.props.stockGS,
      MS: this.props.stockMS,
      XOM: this.props.stockXOM,
      TWRT: this.props.stockTWTR,
      TSLA: this.props.stockTWTR,

    })
  }



  render() {
    // if(!this.props.aggegateOrders){
    //   return<div>Loading...</div>
    // }






    return (
      <ul className="collection">

        {
          this.props.aggregateOrders.map((order, index) => {
           return (
            <li key={index} className="collection-item avatar">
              <i className="material-icons circle red">{Object.keys(order)}</i>
              <span className="title">Shares: {order[Object.keys(order)]}</span>
              <p>Current Value: {}<br/>
                Second Line
              </p>
              <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
          )
         })}
      </ul>

    )
  }
}
const mapStateToProps = state => ({
  aggregateOrders: state.orders.aggregateOrders,
  stockUAA: state.stock.UAA,
  stockNKE: state.stock.NKE,
  stockGS: state.stock.GS,
  stockMS: state.stock.MS,
  stockXOM: state.stock.XOM,
  stockTWTR: state.stock.TWTR,
  stockTSLA: state.stock.TSLA,
})

const mapDispatchToProps = dispatch => ({
   getAllAggregatedOrders: () => dispatch(getAllAggregatedOrders())
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio)
