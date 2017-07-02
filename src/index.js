import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './style/grid.css'
import './style/style.css'
import configureStore from './store/configureStore'
import { Router, Route, hashHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Main from './containers/Main'
import NotFound from './components/NotFound'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <div className='app'>
      <Router history={history}>
        <Route path='/' component={Main} />
        <Route path='*' component={NotFound} />
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
