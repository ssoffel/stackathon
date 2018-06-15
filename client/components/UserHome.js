import React, { Component} from 'react'
import { connect } from 'react-redux'
import getStockList from '../store/stockList'




class UserHome extends Component {

    render(){




      if(!this.props.stockUAA){
        console.log("UserHome", this.props.stockUAA)
        return<div>_________</div>
      }



      var uaa = this.props.stockUAA

      console.log("These are my props uaa", uaa)



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
         </tbody>
       </table>
       </div>
          )
      }
    }


const mapStateToProps = state => {
  return {
   stockUAA: state.stock.UAA,
  // stockNKE: state.stock.NKE,
   stocks: state.stockList.allStocks
  }
}

const mapDispatchToProps = dispatch => ({

  getStockList: () => dispatch(getStockList())


})

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
