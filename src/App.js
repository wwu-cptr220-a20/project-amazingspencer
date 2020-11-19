import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation, Footer, Home, Cases, Map, SurveyQuestion, About } from './components';
import "./style.css";

const React = require('react');
const ReactDOM = require('react-dom');

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

export class App extends Component {
  render() {
    return (
      <Router basename="/project-amazingspencer">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cases' exact component={Cases} />
          <Route path='/map' exact component={Map} />
          <Route path='/survey' exact component={SurveyQuestion} />
          <Route path='/about' exact component={About} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
