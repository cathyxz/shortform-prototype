import React, { Component } from 'react';
import './App.css';
import { DependencyStatus } from './components/DependencyStatus.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DependencyStatus />
      </div>
    );
  }
}

export default App;
