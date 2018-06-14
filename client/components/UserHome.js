import React, { Component} from 'react'
import { connect } from 'react-redux'
import getStockList from '../store/stockList'




class UserHome extends Component {

    render(){


      console.log("these are my props", this.props.stockObj)

      if(!this.props.stockObj){
        console.log("UserHome", this.props.stockObj)
        return<div>_________</div>
      }

      var stockObj = this.props.stockObj

    return (
      <table className="striped highlight" >
         <thead>
           <tr>
               <th>Symbol</th>
               <th>Buy</th>
               <th>Bid Size</th>
               <th>Bid</th>
               <th>Ask</th>
               <th>Ask Size</th>
               <th>Sell</th>
               <th>Last Sale Price</th>
               <th>Volume</th>

           </tr>
         </thead>

         <tbody>
           <tr>
             <td>{stockObj.symbol}</td>
             <td>Button</td>
             <td>{stockObj.bidSize}</td>
             <td>{stockObj.bidPrice}</td>
             <td>{stockObj.askPrice}</td>
             <td>{stockObj.askSize}</td>
             <td>Button</td>
             <td>{stockObj.lastSalePrice}</td>
             <td>{stockObj.volume}</td>
           </tr>
           <tr>
             <td>UA</td>
             <td>Button</td>
             <td>1000</td>
             <td>22.11</td>
             <td>22.15</td>
             <td>1500</td>
             <td>Button</td>
             <td>22.13</td>
             <td>1,250,000</td>
           </tr>

         </tbody>
       </table>
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
