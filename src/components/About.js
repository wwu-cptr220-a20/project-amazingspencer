import React, { Component } from 'react';
import Spencer from '../img/spencer.jpg';
import SamuelH from '../img/SamuelHernadez.jpg';
import Hayden from '../img/HaydenTinker.jpg';

export default class About extends Component {
    render() {
        return (
            <div className="container text-center">
                <h1>Meet the Team!</h1>
                <div className="card-deck">
                    <Card name="Spencer Nielsen" description="Spencer Nielsen is currently attending college at Walla Walla University. He is also learning how to make websites!." imageSource={Spencer} email="mailto:amazingspencer13@gmail.com" />
                    <Card name="Samuel Hernadez" description="Samuel Hernadez is currently studying Computer Science and is learning how to make websites!" imageSource={SamuelH} email="mailto:Samuel.Hernadez@wallawalla.edu" />
                    <Card name="Hayden Tinker" description="Hayden Tinker is currently studying Computer Science and is learning how to make fantastic websites!" imageSource={Hayden} email="mailto:Hayden.Tinker@wallawalla.edu" />
                    <Card name="Samuel Nguyen" description="Samuel Nguyen is currently studying at Walla Walla University and learning about web development!" imageSource='' email="mailto:Samuel.Nguyen@wallawalla.edu" />
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
            <div className="card w-25">
                <img src={this.props.imageSource} className="card-img-top" alt={this.props.name}></img>
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