import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import stock from './stock'
import dailyPL from './dailyPL'
import orders from './orders'

const reducer = combineReducers({
  user,
  stock,
  orders,
  dailyPL
})


const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))
const store = createStore(reducer, middleware)

export default store
export * from './user'
