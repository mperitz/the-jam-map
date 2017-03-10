'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import connect, {Provider} from 'react-redux'
import axios from 'axios'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import App from './containers/AppContainer'
import NavbarContainer from './containers/NavbarContainer'
// import MapViewContainer from './containers/MapViewContainer'
import MapContainer from './containers/MapContainer'
import ShowInfoContainer from './containers/ShowInfoContainer'
import PlaylistContainer from './containers/PlaylistContainer'

import { getShows } from './reducers/map'

const onMapEnter = () => {
  axios.get('/api/shows')
  .then(response => response.data)
  .then(showData => showData.events.event)
  .then(eventObjArr => {
    store.dispatch(getShows(eventObjArr))
  })
  .catch(err => console.error(err))
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" >
        <Route path="/map" component={App} onEnter={onMapEnter} >
        </Route>
        <IndexRedirect to="/map" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
