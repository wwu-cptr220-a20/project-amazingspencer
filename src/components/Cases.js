import React, { Component } from 'react';
import 'whatwg-fetch';

// Top class for Cases page calls on child components
export default class Cases extends Component {
    render() {
        return (
            <div className="container">
                <main id="case-count">
                    <WorldStats />
                    <CasesByCountry />
                </main>
            </div>
        );
    }
}

// Child component to Cases class, renders Global stats,
// also calls its own child components
class WorldStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false,
            confirmed: 0,
            deaths: 0,
            recoveries: 0
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief')
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
        let { error, isLoading } = this.state;
        if (error) {
            return <div><h1>There was a problem with your request.</h1></div>;
        }
        if (isLoading) {
            return <div className="text-center" style={{marginTop: 5}}><i id="spinner" className="fas fa-spin fa-circle-notch"></i></div>;
        }
        return (
            <section>
                <h1>Global Coronavirus Statistics</h1>
                <p>Data from <cite><a style={{textDecoration: 'underline'}} href="https://github.com/Laeyoung/COVID-19-API" target="_blank" rel="noopener noreferrer">Laeyoung COVID-19-API</a></cite>.</p>
                <LastUpdate />
                <h3>Confirmed Cases: {new Intl.NumberFormat().format(this.state.confirmed)}</h3>
                <h3>Confirmed Deaths: {new Intl.NumberFormat().format(this.state.deaths)}</h3>
                <h3>Confirmed Recoveries: {new Intl.NumberFormat().format(this.state.recoveries)}</h3>
            </section>
        );
    }
}

// Child component to WorldStats, renders the date the API 
// was last updated
class LastUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoading: false,
            lastUpdate: ''
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Unable to fetch data!");
                }
                return response.json()
            })
            .then((data) => {
                // Use of Date class from https://css-tricks.com/how-to-convert-a-date-string-into-a-human-readable-format/
                const options = { year: "numeric", month: "long", day: "numeric" }
                let date = new Date(data[0].lastupdate).toLocaleDateString(undefined, options)
                this.setState({ isLoading: false, lastUpdate: date })
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
        let { error, isLoading } = this.state;
        if (error) {
            return <div><h2>There was a problem with your request.</h2></div>;
        }
        if (isLoading) {
            return <div className="text-center" style={{marginTop: 5}}><i id="spinner" className="fas fa-spin fa-circle-notch"></i></div>;
        }
        return <h2>Last update: {this.state.lastUpdate}</h2>
    }
}

// Parent class, and renders the toggle button for country cases
// NOT a child component of WorldStats class
class CasesByCountry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            visible: false,
            countries: []
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Unable to fetch data!");
                }
                return response.json()
            })
            .then((data) => {
                this.setState({ isLoading: false, countries: data })
            },
            // Error handling design inspired by https://medium.com/@shivamkumar19/react-fetch-data-e19c37736950
            error => {
                this.setState({
                    error,
                    isLoading: false
                })
            });
    }

    handleClick = () => {
        // setState logic inspired by https://medium.com/path2code/how-react-js-toggle-button-works-99c838ae2fe1
        this.setState((currentState) => ({
            visible: !currentState.visible,
        }));
    }

    render() {
        let { error, isLoading } = this.state;
        if (error) {
            return <div><h1>There was a problem with your request.</h1></div>;
        }
        if (isLoading) {
            return <div className="text-center" style={{marginTop: 5}}><i id="spinner" className="fas fa-spin fa-circle-notch"></i></div>;
        }

        let countries = this.state.countries.map((country) => {
            return <TableRow country={country} key={country.countryregion} />
        })

        // Use of style for table inspired by https://builditmasters.com/2020/11/04/how-to-create-custom-toggle-in-react/
        return (
            <section>
                <div id="countryButton">
                    <button className="btn-primary caseButton" onClick={() => this.handleClick()}>Toggle Cases by Country</button>
                    <table id="countryTable" className="table table-bordered table-striped" style={{ display: this.state.visible === true ? 'table' : 'none' }}>
                        <caption>List of Coronavirus cases by country.</caption>
                        <TableHeader cols={['Country', 'Cases']} />
                        <tbody>
                            {countries}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

// Child component to CasesByCountry class, renders the table head
// for the table of countries and their cases.
// Table design inspired by Problem Set 8
class TableHeader extends Component {
    render() {
        let tableHeaders = this.props.cols.map((column) => {
            return <th key={column}>{column}</th>
        })

        return (
            <thead id="tableHead">
                <tr>
                    {tableHeaders}
                </tr>
            </thead>
        );
    }
}

// Child component of CasesByCountry class, renders each individual row
// for the table
class TableRow extends Component {
    render() {
        let country = this.props.country;

        return (
            <tr>
                <td>{country.countryregion}</td>
                <td>{new Intl.NumberFormat().format(country.confirmed)}</td>
            </tr>
        );
    }
}