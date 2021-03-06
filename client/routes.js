import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup} from './components'
import UserHome from './components/UserHome'
import Portfolio from './components/Portfolio'
import Orders from './components/Orders'
import {me} from './store'
import { loadAllDailyOrders } from './store/dailyPL'

/**
 * COMPONENT
 */

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.loadAllDailyOrders()


  }

  render() {
    const {isLoggedIn} = this.props
    this.props.loadAllDailyOrders(this.props.user)

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
           <Route path="/login" component={Login} />
           <Route path="/signup" component={Signup} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
             <Route exact path="/home" component={UserHome} />
             <Route exact path="/orders" component={Orders} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        // <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    user: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    loadAllDailyOrders: (userId) => dispatch(loadAllDailyOrders(userId))
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
