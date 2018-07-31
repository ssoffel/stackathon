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
      TWTR: "",
      TSLA: ""
    }
  }



  componentDidMount() {
    this.props.getAllAggregatedOrders(this.props.user)
    this.setState({
      UAA: this.props.stockUAA,
      NKE: this.props.stockNKE,
      GS: this.props.stockGS,
      MS: this.props.stockMS,
      XOM: this.props.stockXOM,
      TWTR: this.props.stockTWTR,
      TSLA: this.props.stockTSLA,

    })
  }



  render() {
    // if(!this.props.aggegateOrders){
    //   return<div>Loading...</div>
    // }

    if(!this.state.UAA || !this.state.NKE || !this.state.GS || !this.state.MS || !this.state.XOM
       || !this.state.TWTR || !this.state.TSLA){

      return<div>Loading...</div>
    }
    console.log("This.props", this.props)



    return (
      <ul className="collection">

        {
          this.props.aggregateOrders.map((order, index) => {
            var stateObj;
            var key = Object.keys(order)
            console.log("this is order", key[0])
            switch (key[0]) {
              case 'UAA':
                stateObj = this.state.UAA
                stateObj.sector = 'Consumer Durable Apparel'
                console.log("in UAA", stateObj)
                break
              case "NKE":
                 stateObj = this.state.NKE
                 stateObj.sector = 'Consumer Durable Apparel'
                 console.log("in NKE", stateObj)
                 break
              case "GS":
                 stateObj = this.state.GS
                 stateObj.sector = 'Banking'
                 console.log("in GS", stateObj)
                 break
              case "MS":
                 stateObj = this.state.MS
                 stateObj.sector = 'Banking'
                 console.log("in MS", stateObj)
                 break
              case "XOM":
                 stateObj = this.state.XOM
                 stateObj.sector = 'Energy'
                 console.log("in XOM", stateObj)
                 break
              case "TWTR":
                 stateObj = this.state.TWTR
                 stateObj.sector = 'Software Services'
                 console.log("in TWTR", stateObj)
                 break
              case "TSLA":
                 stateObj = this.state.TSLA
                 stateObj.sector = 'Automotive'
                 console.log("in TSLA", stateObj)
                 break
             default:
                stateObj = "default"
                console.log("in default", stateObj)

              }//switch

           return (
            <li key={index} className="collection-item avatar">
              <i className="material-icons circle red">{Object.keys(order)}</i>
              <span className="title">Shares: {order[Object.keys(order)]}</span>

              <p>Sector: {stateObj.sector} <br/>
                 Current Value: { Math.abs(Number(order[Object.keys(order)]) * Number(stateObj.bidPrice)) } <br/>

                 
              </p>

            </li>
          )
         })}
      </ul>

    )
  }
}
const mapStateToProps = state => ({
  aggregateOrders: state.orders.aggregateOrders,
  user: state.user.id,
  stockUAA: state.stock.UAA,
  stockNKE: state.stock.NKE,
  stockGS: state.stock.GS,
  stockMS: state.stock.MS,
  stockXOM: state.stock.XOM,
  stockTWTR: state.stock.TWTR,
  stockTSLA: state.stock.TSLA,
})

const mapDispatchToProps = dispatch => ({
   getAllAggregatedOrders: (userId) => dispatch(getAllAggregatedOrders(userId))
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio)
