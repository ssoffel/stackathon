import React, { Component} from 'react'
import { connect } from 'react-redux'
import getStockList from '../store/stockList'
import { postOrder } from '../store/orders'




class UserHome extends Component {

   constructor(){
     super()
     this.state = {
       UAA: "",
       NKE: "",
       GS: "",
       MS: "",
       XOM: "",
       TWRT: "",
       TSLA: "",

     }
   }


    handleClick = (price, symbol, direction) =>{

      window.confirm(`
        Symbol: ${symbol},
        direction: ${direction},
        price: ${price},
        status: filled,`
     );
     var amount;
      switch (symbol) {
            case 'UAA':
              amount = this.state.UAA
              break
            case "NKE":
               amount = this.state.NKE
              break
            case "GS":
               amount = this.state.GS
               break
            case "MS":
               amount = this.state.MS
               break
            case "XOM":
               amount = this.state.XOM
               break
            case "TWTR":
               amount = this.state.TWTR
               break
            case "TSLA":
               amount = this.state.TSLA
               break
           default:
              amount = 0
          }

     const buyPrice = price
     const sector = 'Consumer Durables Apparel'
     const userId = this.props.user
     const order = { symbol, sector, buyPrice, amount, userId }
     console.log("amount", amount)
     this.props.postOrder(order)


   }

   handleChange = (event) => {
   console.log("event.target.value", event.target)
   this.setState({ [event.target.name]: event.target.value })

   }

    render(){
      console.log("this.props", this.props)
      // if(!this.props.stockNKE.symbol){
      //   return<div>_________</div>
      // }
      // if(!this.props.stockUAA.symbol)
      //   return<div>_________</div>
      // }
      if(!this.props.stockUAA.symbol || !this.props.stockNKE.symbol || !this.props.stockGS || !this.props.stockMS || !this.props.stockXOM
         || !this.props.stockTWTR || !this.props.stockTSLA){
        console.log("these are my props", this.props)
        return<div>Loading...</div>
      }
      console.log("getting past checks")
      var uaa = this.props.stockUAA
      var nke = this.props.stockNKE
      var gs = this.props.stockGS
      var ms = this.props.stockMS
      var xom = this.props.stockXOM
      var twtr = this.props.stockTWTR
      var tsla = this.props.stockTSLA


//This is my array i can use to traverse
      var storeArray = [uaa, nke, gs, ms, xom, twtr, tsla]
      console.log("storeArray", storeArray)

    return (
    <div className='row container'>
      <table className="striped highlighted" >
         <thead>
           <tr>
               <th id='sym'>Sym</th>
               <th id='tdAmount' className="center-align">Amount</th>
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
         {
            storeArray.map((stock) =>  {
              return (
            <tr key={stock.symbol}>
             <td id='sym'>{stock.symbol}</td>

             <td id='trAmount'><input onChange={this.handleChange} name={stock.symbol} type="text" id='amount'/></td>

             <td className='center-align'>
             <button
                type='button' onClick={() => this.handleClick(stock.bidPrice, stock.symbol, "BUY")}
                className="btn btn-small waves-effect waves-light"
                name="buy-button">Buy</button></td>

             <td className="center-align">{stock.bidSize}</td>
             <td id='bid-price' className='center-align'>{stock.bidPrice}</td>
             <td id='ask-price' className='center-align'>{stock.askPrice}</td>
             <td className='center-align'>{stock.askSize}</td>

             <td className='center-align'>
             <button
               type='button' onClick={() => this.handleClick(stock.askPrice, stock.symbol, "SEll")}
               className="btn btn-small waves-effect waves-light"
               name="sell-button">Sell</button></td>

             <td className='right-align'>{stock.lastSalePrice}</td>
             <td className='center-align'>{stock.volume}</td>

           </tr>
         )})
         }

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
   stockGS: state.stock.GS,
   stockMS: state.stock.MS,
   stockXOM: state.stock.XOM,
   stockTWTR: state.stock.TWTR,
   stockTSLA: state.stock.TSLA,
   user: state.user.id

  }
}

const mapDispatchToProps = dispatch => ({

  getStockList: () => dispatch(getStockList()),
  postOrder: (order) => dispatch(postOrder(order))


})

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
