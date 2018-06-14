
var stocks = { uaa: {
  name: 'UA',
  price: 50
},
nke: {
  name: 'nke',
  price: 45
}}
const nke = { name: 'nke', price: 55 }
 stocks = Object.assign(stocks, {nke})

console.log(stocks)
