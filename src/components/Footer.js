import React, { Component } from 'react';
// Bootstrap styling inspired by https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

export default class Footer extends Component {
    render() {
        return (
            <div className="container">
                <footer className="py-4 mt-md-5 pt-md-5 border-top">
                    <div className="container">
                        <div className="footer-copyright">
                            <p className="m-0 text-center">
                                Made with <i class="fas fa-heart"></i> by the CovidHub Team. Copyright &copy; All rights reserved.
                        </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}