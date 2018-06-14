import React, { Component} from 'react'
import { connect } from 'react-redux'
import getStockList from '../store/stockList'




class UserHome extends Component {

    render(){




      if(!this.props.stockObj){
        console.log("UserHome", this.props.stockObj)
        return<div>_________</div>
      }


      var uaa = this.props.stockObj
      console.log("These are my props", uaa)


    return (
      <table className="striped highlight" >
         <thead>
           <tr>
               <th>Sym</th>
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
             <td>{uaa.symbol}</td>
             <td>Button</td>
             <td>{uaa.bidSize}</td>
             <td>{uaa.bidPrice}</td>
             <td>{uaa.askPrice}</td>
             <td>{uaa.askSize}</td>
             <td>Button</td>
             <td>{uaa.lastSalePrice}</td>
             <td>{uaa.volume}</td>
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
