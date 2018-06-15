import React, { Component} from 'react'
import { connect } from 'react-redux'
import getStockList from '../store/stockList'




class UserHome extends Component {

   constructor(){
     super()
     this.state = {
       UaaSize: "",
       NkeSize: ""
     }
   }


    handleClick = (price, symbol, direction) =>{
    console.log("event", event.target)
      window.confirm(`
        Symbol: ${symbol},
        direction: ${direction},
        price: ${price},
        status: filled,`
     );
     const buyPrice = price
     const amount = Number(this.state.UaaSize)
     const sector = 'Consumer Durables Apparel'
     const userId = this.props.user
     const order = { symbol, sector, buyPrice, amount, userId }
     console.log("order", order)

   }

   handleChange = (event) => {
   console.log("event.target.value", event.target.value)
   this.setState({ [event.target.name]: event.target.value })

   }

    render(){

      if(!this.props.stockNKE){

        return<div>_________</div>
      }

      if(!this.props.stockUAA){

        return<div>_________</div>
      }




      var uaa = this.props.stockUAA
      var nke = this.props.stockNKE







    return (
    <div className='row container'>
      <table className="striped" >
         <thead>
           <tr>
               <th id='sym'>Sym</th>
               <th className="center-align">Amount</th>
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
             <td><input onChange={this.handleChange} name='UaaSize'type="text" id='amount'/></td>
             <td className='center-align'>
             <button
                type='button'onClick={() => this.handleClick(uaa.bidPrice, uaa.symbol, "BUY")}
                className="btn btn-small waves-effect waves-light"
                 name="buy-button">Buy</button></td>



             <td className="center-align">{uaa.bidSize}</td>
             <td id='bid-price' className='center-align'>{uaa.bidPrice}</td>
             <td id='ask-price' className='center-align'>{uaa.askPrice}</td>
             <td className='center-align'>{uaa.askSize}</td>
             <td className='center-align'><button data-target="modal1" onClick={() => this.handleClick(uaa.askPrice, uaa.symbol, "SEll")} className="btn btn-small waves-effect waves-light" name="sell-button">Sell</button></td>
             <td className='right-align'>{uaa.lastSalePrice}</td>
             <td className='center-align'>{uaa.volume}</td>
           </tr>
             <tr>
              <td id='sym'>{nke.symbol}</td>
              <td id='amount'><input id='amount'ref={domNode => {
              this.domNode = domNode
            }}type='text'/></td>
              <td className='center-align'><button onClick={() => this.handleClick(nke.bidPrice, nke.symbol, "BUY")} className="btn btn-small waves-effect waves-light" name="buy-button">Buy</button></td>
              <td className="center-align">{nke.bidSize}</td>
              <td id='bid-price' className='center-align'>{nke.bidPrice}</td>
              <td id='ask-price' className='center-align'>{nke.askPrice}</td>
              <td className='center-align'>{nke.askSize}</td>
              <td className='center-align'><button onClick={() => this.handleClick(nke.bidPrice, nke.symbol, "SELL")} className="btn btn-small waves-effect waves-light" name="sell-button">Sell</button></td>
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
   stockUAA: state.stock.UAA,
   stockNKE: state.stock.NKE,
   user: state.user.id
  }
}

const mapDispatchToProps = dispatch => ({

  getStockList: () => dispatch(getStockList())


})

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
