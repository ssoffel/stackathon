// import io from 'socket.io-client'
// import store from './store'
// import loadStock from './store/stock'
//
// const socket = io('https://ws-api.iextrading.com/1.0/tops')
//
// // Listen to the channel's messages
// socket.on('message', message => {
//
//   store.dispatch(loadStock(message))
//   console.log(message)})
//
//
// socket.on('connect', () => {
//   console.log('Connected!')
//
//   // Subscribe to topics (i.e. appl,fb,aig+)
//   socket.emit('subscribe', 'uaa')
// })
//
//
//
//
// export default socket
