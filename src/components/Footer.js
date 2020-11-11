import React, { Component } from 'react';
// Bootstrap styling inspired by https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer className="py-4 fixed-bottom">
                    <div className="container">
                        <div className="footer-copyright text-center">
                            <p className="m-0 text-center text-white">
                                Contact <a href="mailto:amazingspencer13@gmail.com">Spencer</a>.
                            Spencer Nielsen Copyright &copy; All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}