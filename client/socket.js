// import io from 'socket.io-client'
// import store from './store'
// import { loadStocksThunk } from './store/stock'
//
// const socket = io('https://ws-api.iextrading.com/1.0/tops')
//
// // Listen to the channel's messages
// socket.on('message', message => {
//
//  var obj = JSON.parse(message)
//   store.dispatch(loadStocksThunk(obj))
//    })
//
//
// socket.on('connect', () => {
//   console.log('Connected!')
//
//   // Subscribe to topics (i.e. appl,fb,aig+)
//   socket.emit('subscribe', 'uaa,nke,gs,ms,xom,twtr,tsla')
// })
//
//
//
//
// export default socket
