import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class Map extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={3}
        style={mapStyles}
        initialCenter={
          {
            lat: 0,
            lng: 0
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBbPk_NONuQ7r1buVhCf_R4c32j_E660xc'
})(MapContainer);