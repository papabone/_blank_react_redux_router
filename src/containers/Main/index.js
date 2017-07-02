import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../../actions/appActions'

class App extends Component {
  render() {
    const { ownProps } = this.props
    //const { focus } = this.props.appActions

    console.log(ownProps)

    return(
    <div className='main'>
      Hello, World!
    </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    ownProps
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
