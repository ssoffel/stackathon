/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'


class Portfolio extends Component {


  componentDidMount() {

  }



  render() {

   console.log('____________')
    return (
      <div>Im Quote</div>

    )
  }
}
const mapStateToProps = state => ({
  stockObj: state.stock.data
})



export default connect(
  mapStateToProps,
  null
)(Portfolio)
