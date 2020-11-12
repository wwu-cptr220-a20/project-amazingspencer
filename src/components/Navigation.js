import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
// Use of Client-Side Routing with Navigation inspired by https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <nav className="navbar fixed-top navbar-expand-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars hamburger"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto nav">
                            <li className="nav-item active"><Link className="nav-link" to="/"><i
                                className="fa fa-fw fa-home">&nbsp;Home</i></Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/cases"><i
                                className="fas fa-syringe">&nbsp;Cases</i></Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/map"><i
                                className="fas fa-map-marked-alt">&nbsp;Map</i></Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/survey"><i
                                className="fas fa-poll">&nbsp;Survey</i></Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about"><i
                                className="fas fa-ellipsis-h">&nbsp;About</i></Link></li>
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default withRouter(Navigation);