import React from 'react'

import NavbarContainer from './NavbarContainer'
import ShowInfoContainer from './ShowInfoContainer'
import PlaylistContainer from './PlaylistContainer'
import MapContainer from './MapContainer'

export default function ({ children }) {
  return (
    <div>
      <NavbarContainer />
        <div className = "clearfix">
          <div className="map-container col-sm-8 col-lg-9">
            <MapContainer />
          </div>
          { children }
          <div className="panel panel-default col-sm-4 col-lg-3" style={{}}>
            <div className="panel-body" id="options-panel">
              <ShowInfoContainer />
            </div>
          </div>
        </div>
      <div className="panel panel-default" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '80px', margin: '0'}}>
        <PlaylistContainer />
      </div>
    </div>
  );
}
