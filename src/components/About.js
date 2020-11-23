import React, { Component } from 'react';
import Spencer from '../img/spencer.jpg';
import SamuelH from '../img/SamuelHernadez.jpg';
import Hayden from '../img/HaydenTinker.jpg';
import SamuelN from '../img/annonymous.jpg';

export default class About extends Component {
    render() {
        return (
            <div className="container text-center">
                <h1>Meet the CovidHub Team!</h1>
                <div id="cardDeck" className="card-deck mb-3 mx-auto">
                    <div className="card-column col-md-6">
                        <Card name="Spencer Nielsen" description="Spencer is currently studying Information Systems. He is also learning how to make websites!." imageSource={Spencer} email="mailto:Spencer.Nielsen@wallawalla.edu" />
                    </div>

                    <div className="card-column col-md-6">
                        <Card name="Samuel S. Hernandez" description="Samuel is currently studying Computer Science and is learning how to make websites!" imageSource={SamuelH} email="mailto:Samuel.Hernadez@wallawalla.edu" />
                    </div>

                    <div className="card-column col-md-6">
                        <Card name="Hayden Tinker" description="Hayden is currently studying Computer Science and is learning how to make fantastic websites!" imageSource={Hayden} email="mailto:Hayden.Tinker@wallawalla.edu" />
                    </div>
                    <div className="card-column col-md-6">
                        <Card name="Samuel Nguyen" description="Samuel is currently studying at Walla Walla University and learning about web development!" imageSource={SamuelN} email="mailto:Samuel.Nguyen@wallawalla.edu" />
                    </div>
                </div>
            </div>
        );
    }
}

// Renders a card based on props passed to it.
// Required props are: name, description, image source, and email with "mailto:"
class Card extends Component {
    render() {
        return (
            <div className="card shadow-sm">
                <img src={this.props.imageSource} className="card-img-top my-auto" alt={this.props.name}></img>
                <div className="card-body text-center">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.description}</p>
                </div>
                <div className="card-footer">
                    <a href={this.props.email} className="btn btn-primary" aria-label="button">Contact</a>
                </div>
            </div>
        );
    }
}