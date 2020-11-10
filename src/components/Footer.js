import React, { Component } from 'react';
// Bootstrap styling inspired by https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer class="py-5 fixed-bottom">
                    <div class="container">
                        <div class="footer-copyright text-center">
                            <p class="m-0 text-center text-white">
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