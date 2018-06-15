import React, { Component} from 'react'
import { connect } from 'react-redux'
import getStockList from '../store/stockList'




class UserHome extends Component {

    render(){




      if(!this.props.stockObjs){
        console.log("UserHome", this.props.stockObjs)
        return<div>_________</div>
      }



      var uaa = this.props.stockObjs.UAA
      var nke = this.props.stockObjs.NKE

      console.log('this is uaa', uaa)
      console.log('this is nke', nke)





    return (
    <div className='row container'>
      <table className="striped highlight" >
         <thead>
           <tr>
               <th id='sym'>Sym</th>
               <th className='center-align'>Buy</th>
               <th className='center-align'>Bid Size</th>
               <th className='center-align'>Bid</th>
               <th className='center-align'>Ask</th>
               <th className='center-align'>Ask Size</th>
               <th className='center-align'>Sell</th>
               <th className='right-align'>Last Sale Price</th>
               <th className='center-align'>Volume</th>

           </tr>
         </thead>

         <tbody>
            <tr>
             <td id='sym'>{uaa.symbol}</td>
             <td className='center-align'><button className="btn btn-small waves-effect waves-light" name="buy-button">Buy</button></td>
             <td className="center-align">{uaa.bidSize}</td>
             <td id='bid-price' className='center-align'>{uaa.bidPrice}</td>
             <td id='ask-price' className='center-align'>{uaa.askPrice}</td>
             <td className='center-align'>{uaa.askSize}</td>
             <td className='center-align'><button className="btn btn-small waves-effect waves-light" name="sell-button">Sell</button></td>
             <td className='right-align'>{uaa.lastSalePrice}</td>
             <td className='center-align'>{uaa.volume}</td>
           </tr>
             <tr>
              <td id='sym'>{nke.symbol}</td>
              <td className='center-align'><button className="btn btn-small waves-effect waves-light" name="buy-button">Buy</button></td>
              <td className="center-align">{nke.bidSize}</td>
              <td id='bid-price' className='center-align'>{nke.bidPrice}</td>
              <td id='ask-price' className='center-align'>{nke.askPrice}</td>
              <td className='center-align'>{nke.askSize}</td>
              <td className='center-align'><button className="btn btn-small waves-effect waves-light" name="sell-button">Sell</button></td>
              <td className='right-align'>{nke.lastSalePrice}</td>
              <td className='center-align'>{nke.volume}</td>
            </tr>
         </tbody>
       </table>
       </div>
          )
      }
    }


const mapStateToProps = state => {
  return {
   stockObjs: state.stock,
  // stockNKE: state.stock.NKE,
   stocks: state.stockList.allStocks
  }
}

const mapDispatchToProps = dispatch => ({

  getStockList: () => dispatch(getStockList())


})

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
