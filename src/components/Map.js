import React, { Component } from "react";
import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-map";

const mapStyles = {
    minZoom: 3,
    maxZoom: 8,

    width: '100%',
    height: '100%',


    restriction: {
        latLngBounds: {
            north: 1,
            south: -1,
            east: -5,
            west: -5,
        }
    },

    disableDefaultUI: true
};

function MyMap() {
    return (
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: 0, lng: 0 }}
        />


    )
};
const WrappedMap = withScriptjs(withGoogleMap(MyMap));
export default class Map extends Component {
    render() {
        return (<div style={mapStyles}>

<WrappedMap
  googleMapURL="https://maps.googleapis.com/maps/api/js?cv=3.exp&libraries=geometry,drawing,places&key=AIzaSyBbPk_NONuQ7r1buVhCf_R4c32j_E660x"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
            </div>
            );
    }
};