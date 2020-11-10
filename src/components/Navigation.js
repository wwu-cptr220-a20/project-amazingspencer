import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
// Use of Client-Side Routing with Navigation inspired by https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <nav class="navbar fixed-top navbar-expand-md">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="fas fa-bars hamburger"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto nav">
                            <li class="nav-item active"><Link class="nav-link" to="/home"><i
                                class="fa fa-fw fa-home">&nbsp;Home</i></Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/cases"><i
                                class="fas fa-syringe">&nbsp;Cases</i></Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/map"><i
                                class="fas fa-map-marked-alt">&nbsp;Map</i></Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/survey"><i
                                class="fas fa-poll">&nbsp;Survey</i></Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/about"><i
                                class="fas fa-ellipsis-h">&nbsp;About</i></Link></li>
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default withRouter(Navigation);