import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Navigation from './Navigation';
import Footer from './Footer';


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

    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.HYBRID


};

export class Map extends Component {


    //<Navigation/>


    render() {
        let { error, isLoading } = this.state;
        if (error) {
            return <div><h1>There was a problem with your request.</h1></div>;
        }
        if (isLoading) {
            return <div className="text-center" style={{ marginTop: 5 }}><i id="spinner" class="fas fa-spin fa-circle-notch"></i></div>;
        }
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

        <Marker

            onClick={this.onMarkerClick}
            name={'country region '}
            //add infowindow with API data

        />


        // <covidData />
        //marker

    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBbPk_NONuQ7r1buVhCf_R4c32j_E660xc'
})(MapContainer);

//<Footer/>

class covidData {
    componentDidMount() {
        fetch('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Unable to fetch data!");
                }
                return response.json()
            })
            .then((data) => {
                this.setState({ isLoading: false, confirmed: data.confirmed, deaths: data.deaths, recoveries: data.recovered })
            },
                // Error handling design inspired by https://medium.com/@shivamkumar19/react-fetch-data-e19c37736950
                error => {
                    this.setState({
                        error,
                        isLoading: false
                    })
                });
    }


    render() {

    }

}

class Marker {


    render() {
        state = {
            showingInfoWindow: false,  // Hides or shows the InfoWindow
            activeMarker: {},          // Shows the active marker upon click
            selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
        };
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

}