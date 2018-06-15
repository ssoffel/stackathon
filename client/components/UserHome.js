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
    <div className='row container'>
      <table className="striped highlight" >
         <thead>
           <tr>
               <th id='sym'>Sym</th>
               <th id='buy-button'>Buy</th>
               <th id='bid-size'>Bid Size</th>
               <th id='bid'>Bid</th>
               <th id='ask'>Ask</th>
               <th id='askSize'>Ask Size</th>
               <th id='sell-button'>Sell</th>
               <th id='last-sale-prcie'>Last Sale Price</th>
               <th id='volume'>Volume</th>

           </tr>
         </thead>

         <tbody>
           <tr>
             <td id='sym'>{uaa.symbol}</td>
             <td id='buy-button'>Button</td>
             <td className="center-align">{uaa.bidSize}</td>
             <td className='center-align'>{uaa.bidPrice}</td>
             <td className='center-align'>{uaa.askPrice}</td>
             <td className='center-align'>{uaa.askSize}</td>
             <td id='sell-button'>Button</td>
             <td className='center-align'>{uaa.lastSalePrice}</td>
             <td className='center-align'>{uaa.volume}</td>
           </tr>


         </tbody>
       </table>
       </div>
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
