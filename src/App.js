import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import { DependencyStatus } from './components/DependencyStatus.js';
import { Home } from './components/Home.js';
import { PersonalInfo } from './components/PersonalInfo.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/dependency-status" component={DependencyStatus}/>
          <Route path="/personal-info" component={PersonalInfo}/>
        </div>
      </Router>
    );
  }
}

export default App;
