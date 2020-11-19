import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// Use of google-map-react from https://www.youtube.com/watch?v=OunoJaa-dnU&t=433s and https://www.npmjs.com/package/google-map-react

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoading: false,
            countries: []
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({ isLoading: true })
        fetch('https://corona.lmao.ninja/v3/covid-19/countries')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Unable to fetch data!");
                }
                return response.json()
            })
            .then((data) => {
                if (this._isMounted) {
                    console.log(data);
                    this.setState({ isLoading: false, countries: data })
                }
            },
                // Error handling design inspired by https://medium.com/@shivamkumar19/react-fetch-data-e19c37736950
                error => {
                    this.setState({
                        error,
                        isLoading: false
                    })
                });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { error, isLoading } = this.state;
        if (error) {
            return <div><h2>There was a problem with your request.</h2></div>;
        }
        if (isLoading) {
            return <div className="text-center" style={{ marginTop: 5 }}><i id="spinner" className="fas fa-spin fa-circle-notch"></i></div>;
        }

        let countries = this.state.countries.map((data) => {
            return (
                <div
                    key={data.country}
                    lat={data.countryInfo.lat}
                    lng={data.countryInfo.long}
                    style={{
                        color: "black",
                        backgroundColor: "#FFF",
                        height: "25px",
                        width: "35px",
                        textAlign: "center",
                    }}
                >
                    <img height="10px" src={data.countryInfo.flag} alt={data.country} />
                    <br />
                    {data.cases}
                </div>
            );
        })
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBbPk_NONuQ7r1buVhCf_R4c32j_E660xc" }}
                    defaultCenter={{lat: 0, lng: 0}}
                    defaultZoom={0}
                    defaultMaptype={{mapTypeId: "hybrid"}}
                    defaultUI={{disableDefaultUI: true}}
                >
                    {countries}
                </GoogleMapReact>
            </div>
        );
    }
}