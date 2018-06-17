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
     var order;
     var sector;
      switch (symbol) {
            case 'UAA':
              amount = this.state.UAA
              sector = "Comsumer Durable Apparel"
              break
            case "NKE":
               amount = this.state.NKE
               sector = "Comsumer Durable Apparel"
              break
            case "GS":
               amount = this.state.GS
               sector = "Banking"
               break
            case "MS":
               amount = this.state.MS
               sector = "Banking"
               break
            case "XOM":
               amount = this.state.XOM
               sector = "Energy"
               break
            case "TWTR":
               amount = this.state.TWTR
               sector = "Software Services"
               break
            case "TSLA":
               amount = this.state.TSLA
               sector = "Automotive"
               break
           default:
              amount = 0
          }

          if (direction === "BUY") {
           const buyPrice = price
           const userId = this.props.user
                 order = { symbol, sector, buyPrice, amount, userId }
          } else {
           const sellPrice = price
           const userId = this.props.user
                 order = { symbol, sector, sellPrice, amount, userId }
          }
          this.props.postOrder(order)


   }

   handleChange = (event) => {
   console.log("event.target.value", event.target)
   this.setState({ [event.target.name]: event.target.value })

   }

    render(){
      console.log("this.props", this.props)

      if(!this.props.stockUAA.symbol || !this.props.stockNKE.symbol || !this.props.stockGS || !this.props.stockMS || !this.props.stockXOM
         || !this.props.stockTWTR || !this.props.stockTSLA){

        return<div>Loading...</div>
      }

      var uaa = this.props.stockUAA
      var nke = this.props.stockNKE
      var gs = this.props.stockGS
      var ms = this.props.stockMS
      var xom = this.props.stockXOM
      var twtr = this.props.stockTWTR
      var tsla = this.props.stockTSLA


//This is my array i can use to traverse
      var storeArray = [uaa, nke, gs, ms, xom, twtr, tsla]


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
            storeArray.map((stock, index) =>  {
              return (
            <tr key={index}>
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
