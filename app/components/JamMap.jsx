import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
// import MarkerClusterer from './marker-clusterer/MarkerClusterer'
import React from 'react'
import _ from 'lodash'

const InitializeGoogleMap = withGoogleMap(props => {
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
        onClick={() => props.onMarkerClick(marker)}
      >
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onWindowClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    ))}


  </GoogleMap>
  )
})

export default class JamMap extends React.Component {

  state = {
    center: {
      lat: 0,
      lng: 0,
    },
    markers: []
  }

  componentWillReceiveProps(props) {
    this.setState({ markers: props.markers })
  }

  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.props.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          }
        }
        return marker
      }),
    })
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          }
        }
        return marker
      }),
    })
  }

  render() {
    return (
    <InitializeGoogleMap
      containerElement={
        <div style={{ height: `80vh` }} />
      }
      mapElement={
        <div style={{ height: `100%` }} />
      }
      onMapLoad={_.noop}
      onMapClick={_.noop}
      markers={this.state.markers}
      onMarkerClick={this.props.onMarkerClick}
      onMarkerRightClick={_.noop}
    />
    )
  }

}


