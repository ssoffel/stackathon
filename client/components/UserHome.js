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
       TWTR: "",
       TSLA: "",
       UAA_daily: {amount: 0, costOfShares: 0, avgPrice: 0, dailyClosedPL: 0 },
       NKE_daily: {amount: 0, costOfShares: 0, avgPrice: 0, dailyClosedPL: 0 },
       GS_daily: {amount: 0, costOfShares: 0, avgPrice: 0, dailyClosedPL: 0 },
       MS_daily: {amount: 0, costOfShares: 0, avgPrice: 0, dailyClosedPL: 0 },
       XOM_daily: {amount: 0, costOfShares: 0, avgPrice: 0, dailyClosedPL: 0 },
       TWTR_daily: {amount: 0, costOfShares: 0, avgPrice: 0, dailyClosedPL: 0 },
       TSLA_daily: {amount: 0, costOfShares: 0, avgPrice: 0, dailyClosedPL: 0 },

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
     var state;
      switch (symbol) {
            case 'UAA':
              amount = direction === 'BUY' ? this.state.UAA : (this.state.UAA * -1)
              sector = 'Consumer Durable Apparel'
              state = {...this.state.UAA_daily};

              // state.dailyClosedPL = state.amount == 0 ? state.dailyClosedPL :
              // Number(this.state.UAA.amount * price) - Number(this.state.UAA.amount * state.avgPrice)

              state.amount = this.state.UAA_daily.amount + Number(amount);
              state.costOfShares = Number(this.state.UAA_daily.costOfShares) + Number(amount * price)
              state.avgPrice = state.costOfShares / state.amount

              break
            case "NKE":
              amount = direction === 'BUY' ? this.state.NKE : (this.state.NKE * -1)
              sector = 'Consumer Durable Apparel'
              state = {...this.state.NKE_daily};
              state.amount = this.state.NKE_daily.amount + Number(amount);
              state.costOfShares = Number(this.state.NKE_daily.costOfShares) + Number(amount * price)
              state.avgPrice = state.costOfShares / state.amount


              break
            case "GS":
            amount = direction === 'BUY' ? this.state.GS : (this.state.GS * -1)
            sector = "Banking"
            state = {...this.state.GS_daily};
            state.amount = this.state.GS_daily.amount + Number(amount);
            state.costOfShares = Number(this.state.GS_daily.costOfShares) + Number(amount * price)
            state.avgPrice = state.costOfShares / state.amount

               break
            case "MS":
            amount = direction === 'BUY' ? this.state.MS : (this.state.MS * -1)
            sector = "Banking"
            state = {...this.state.MS_daily};
            state.amount = this.state.MS_daily.amount + Number(amount);
            state.costOfShares = Number(this.state.MS_daily.costOfShares) + Number(amount * price)
            state.avgPrice = state.costOfShares / state.amount


               break
            case "XOM":
            amount = direction === 'BUY' ? this.state.XOM : (this.state.XOM * -1)
            sector = "Energy"
            state = {...this.state.XOM_daily};
            state.amount = this.state.XOM_daily.amount + Number(amount);
            state.costOfShares = Number(this.state.XOM_daily.costOfShares) + Number(amount * price)
            state.avgPrice = state.costOfShares / state.amount

               break
            case "TWTR":
            amount = direction === 'BUY' ? this.state.TWTR : (this.state.TWTR * -1)
            sector = 'Software Services'
            state = {...this.state.TWTR_daily};
            state.amount = this.state.TWTR_daily.amount + Number(amount);
            state.costOfShares = Number(this.state.TWTR_daily.costOfShares) + Number(amount * price)
            state.avgPrice = state.costOfShares / state.amount


               break
            case "TSLA":
            amount = direction === 'BUY' ? this.state.TSLA : (this.state.TSLA * -1)
            sector = 'Automotive'
            state = {...this.state.TSLA_daily};
            state.amount = this.state.TSLA_daily.amount + Number(amount);
            state.costOfShares = Number(this.state.TSLA_daily.costOfShares) + Number(amount * price)
            state.avgPrice = state.costOfShares / state.amount


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


          let symbolName = symbol + "_daily"

          this.setState({

          [symbolName]: {
           ...state }
         })


      }

   handleChange = (event) => {

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

      console.log("this is UAA-daily state", this.state.UAA_daily)
      console.log("this is NKE-daily state", this.state.NKE_daily)
      console.log("this is GS-daily state", this.state.GS_daily)
      console.log("this is UMSdaily state", this.state.MS_daily)
      console.log("this is UAXOM_daily state", this.state.XOM_daily)
      console.log("this is UTWTR_daily state", this.state.TWTR_daily)
      console.log("this is UTSLAdaily state", this.state.TSLA_daily)

      let stockAmount = [this.state.UAA_daily,
      this.state.NKE_daily,
      this.state.GS_daily,
      this.state.MS_daily,
      this.state.XOM_daily,
      this.state.TWTR_daily,
      this.state.TSLA_daily]

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
               <th className='right-align'>Daily Position</th>
               <th className='right-align'>Daily P/L</th>
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

             <td id='trAmount'><input onChange={this.handleChange}  name={stock.symbol} type="text" id='amount'/></td>

             <td className='center-align'>
               <button
                 type='button' onClick={() => this.handleClick(stock.askPrice, stock.symbol, "BUY")}
                 className="btn btn-small waves-effect waves-light"
                 name="buy-button">Buy</button></td>

             <td className="center-align">{stock.bidSize}</td>
             <td id='bid-price' className='center-align'>{stock.bidPrice}</td>
             <td id='ask-price' className='center-align'>{stock.askPrice}</td>
             <td className='center-align'>{stock.askSize}</td>

             <td className='center-align'>
               <button
                 type='button' onClick={() => this.handleClick(stock.bidPrice, stock.symbol, "SEll")}
                 className="btn btn-small waves-effect waves-light"
                 name="sell-button">Sell</button></td>
             <td className='center-align'>{stockAmount[index].amount}</td>
             <td className='center-align'>{Math.round((stockAmount[index].amount * stock.lastSalePrice) - (stockAmount[index].amount * stockAmount[index].avgPrice)) }</td>
             <td className='center-align'>{stock.lastSalePrice}</td>
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

//<td className='center-align'>{`this.state.${stock.symbol + '_daily'}.amount`}</td>

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
