'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import axios from 'axios'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import App from './containers/AppContainer'

import { getShows } from './reducers/map'


const onMapEnter = () => {
  axios.post('/api/shows')
  .then(response => response.data)
  .then(eventObjArr => {
    store.dispatch(getShows(eventObjArr))
  })
  .catch(err => console.error(err))
}

render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" >
          <Route path="/map" component={App} onEnter={onMapEnter} >
          </Route>
          <IndexRedirect to="/map" />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)
