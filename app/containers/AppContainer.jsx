import React from 'react';

import NavbarContainer from './NavbarContainer';
// import JamMapContainer from './JamMapContainer';
import ShowInfoContainer from './ShowInfoContainer';
import PlaylistContainer from './PlaylistContainer';
// import FakeMap from '../components/FakeMap'
import MapContainer from './MapContainer'

export default function ({ children }) {
  return (
    <div id="main">
      <NavbarContainer />
        <div className = "clearfix">
          <div className="map-container col-sm-8 col-lg-9">
            <MapContainer />
          </div>
          { children }
          <div id="control-panel" className="col-sm-4 col-lg-3 clearfix">
            <div className="col-xs-6 col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body" id="options-panel">
                  <ShowInfoContainer />
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body" id="itinerary">
                  <PlaylistContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
