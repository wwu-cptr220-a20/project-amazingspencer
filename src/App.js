// import { render } from '@testing-library/react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation, Footer, Home, Cases, Survey, About } from './components';
import './style.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navigation />
          <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/cases' exact component={Cases} />
            <Route path='/survey' exact component={Survey} />
            <Route path='/about' exact component={About} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
