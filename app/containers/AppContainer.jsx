import React from 'react';

import NavbarContainer from './NavbarContainer';
import MapContainer from './MapContainer';
import ShowInfoContainer from './ShowInfoContainer';
import PlaylistContainer from './PlaylistContainer';

export default function ({ children }) {
  return (
    <div id="main">
      <NavbarContainer />
        <div className = "clearfix">
          { children }
          <MapContainer />
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
