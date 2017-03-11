import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react'
import _ from 'lodash'

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
const GettingStartedGoogleMap = withGoogleMap(props => {
  return (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={12}
    defaultCenter={{lat: 40.7128, lng: -74.0059}}
    onClick={props.onMapClick}
  >
    {props.markers && props.markers.map((marker, index) => (
      <Marker
        key={marker.event.id}
        {...marker}
        onClick={() => props.onMarkerClick(marker.event)}
      />
    ))}
  </GoogleMap>
  )
})

export default class FakeMap extends React.Component {

  render() {
    console.log('props', this.props)
    return (
    <GettingStartedGoogleMap
      containerElement={
        <div style={{ height: `95vh`, width: `130vh` }} />
      }
      mapElement={
        <div style={{ height: `100%` }} />
      }
      onMapLoad={_.noop}
      onMapClick={_.noop}
      markers={this.props.markers}
      onMarkerClick={this.props.onMarkerClick}
      onMarkerRightClick={_.noop}
    />
    )
  }

}


