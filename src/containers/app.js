import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as appActions from '../actions/appActions'

class App extends Component {
  render() {
    const { app, ownProps } = this.props
    console.log(ownProps , app)
    return <div>Hello, world...</div>
  }
}

function mapStateToProps (state, ownProps) {
  return {
    app: state.app,
    ownProps
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
