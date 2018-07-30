import React, { Component} from 'react'
import { connect } from 'react-redux'
import { postDailyOrder, updateOrder } from '../store/dailyPL'
import { postOrder } from '../store/orders'
import { processOrder } from './ProcessOrder'
import { getPositions } from './GetPositions'





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
       UAA_daily: {amount: 0, costOfShares: 0, avgPrice: 0 },
       NKE_daily: {amount: 0, costOfShares: 0, avgPrice: 0 },
       GS_daily: {amount: 0, costOfShares: 0, avgPrice: 0 },
       MS_daily: {amount: 0, costOfShares: 0, avgPrice: 0 },
       XOM_daily: {amount: 0, costOfShares: 0, avgPrice: 0 },
       TWTR_daily: {amount: 0, costOfShares: 0, avgPrice: 0 },
       TSLA_daily: {amount: 0, costOfShares: 0, avgPrice: 0 },

     }
   }

   componentDidMount = () => {
     "console.log"
     this.setState({
      UAA_daily: getPositions(this.props.daily, 'UAA'),
      NKE_daily: getPositions(this.props.daily, 'NKE'),
      GS_daily: getPositions(this.props.daily, 'GS'),
      MS_daily: getPositions(this.props.daily, 'MS'),
      XOM_daily: getPositions(this.props.daily, 'XOM'),
      TWTR_daily: getPositions(this.props.daily, 'TWTR'),
      TSLA_daily: getPositions(this.props.daily, 'TSLA'),
     })
   }

   componentWillReceiveProps = (prevProps) => {
     this.setState({
      UAA_daily: getPositions(prevProps.daily, 'UAA'),
      NKE_daily: getPositions(prevProps.daily, 'NKE'),
      GS_daily: getPositions(prevProps.daily, 'GS'),
      MS_daily: getPositions(prevProps.daily, 'MS'),
      XOM_daily: getPositions(prevProps.daily, 'XOM'),
      TWTR_daily: getPositions(prevProps.daily, 'TWTR'),
      TSLA_daily: getPositions(prevProps.daily, 'TSLA'),
     })
   }

   handleClick = (price, symbol, direction) =>{

      window.confirm(`
        Symbol: ${symbol},
        direction: ${direction},
        price: ${price},
        status: filled,`
     );

     let resp = processOrder(direction, symbol, price, this.state, this.props.daily, this.props.user)

          this.props.postOrder(resp[0])
          this.props.postDailyOrder(resp[1])
          //this.props.putDailyOrder(resp[1])

          let symbolName = symbol + "_daily"

          console.log("this.props.daily before gtePositions call", this.props.daily)

          this.setState({
            [symbolName]: getPositions(this.props.daily, symbol)

         })
     }

   handleChange = (event) => {

   this.setState({ [event.target.name]: event.target.value })



   }

    render(){


      if(!this.props.stockUAA.symbol || !this.props.stockNKE.symbol || !this.props.stockGS || !this.props.stockMS || !this.props.stockXOM
         || !this.props.stockTWTR || !this.props.stockTSLA){

        return<div>Loading...</div>
      }
     console.log("this is this.props.daily in render", this.props.daily)

      var uaa = this.props.stockUAA
      var nke = this.props.stockNKE
      var gs = this.props.stockGS
      var ms = this.props.stockMS
      var xom = this.props.stockXOM
      var twtr = this.props.stockTWTR
      var tsla = this.props.stockTSLA


//This is my array i can use to traverse
      var storeArray = [uaa, nke, gs, ms, xom, twtr, tsla]



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


             <td className='center-align'>{ !isNaN(Math.round((stockAmount[index].amount * stock.lastSalePrice) - (stockAmount[index].amount * stockAmount[index].avgPrice))) ?
             Math.round((stockAmount[index].amount * stock.lastSalePrice) - (stockAmount[index].amount * stockAmount[index].avgPrice )) :
              Math.round((stockAmount[index].costOfShares) * -1) }</td>
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
   user: state.user.id,
   daily: state.dailyPL.daily

  }
}

const mapDispatchToProps = dispatch => ({

  postOrder: (order) => dispatch(postOrder(order)),
  postDailyOrder: (order) => dispatch(postDailyOrder(order)),
  putDailyOrder: (order) => dispatch(updateOrder(order))

})



export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
