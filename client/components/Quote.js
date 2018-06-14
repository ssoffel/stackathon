/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'


class Quote extends Component {


  componentDidMount() {

  }



  render() {
   if(!this.props.stockObj.symbol){
     console.log("in return")
     return<div>_________</div>
   }
   console.log(this.props.stockObj.symbol, '____________')
    return (
      <div>Im here</div>

    )
  }
}
const mapStateToProps = state => ({
  stockObj: state.stock.data
})



export default connect(
  mapStateToProps,
  null
)(Quote)
