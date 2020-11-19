import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


export default class Map extends Component {

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBbPk_NONuQ7r1buVhCf_R4c32j_E660xc" }}
                    defaultCenter={{lat: 0, lng: 0}}
                    defaultZoom={{ zoom: 3 }}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

