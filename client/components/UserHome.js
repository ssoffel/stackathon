import React, { Component} from 'react'
import { connect } from 'react-redux'
import getStockList from '../store/stockList'


class UserHome extends Component {

    render(){

    return (
      <div>Im here </div>
    )
  }
}


const mapStateToProps = state => {
  return {
   stockObj: state.stock.data,
   stocks: state.stockList.allStocks
  }
}

const mapDispatchToProps = dispatch => ({

  getStockList: () => dispatch(getStockList())

})

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
