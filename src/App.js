import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.less';
import { DependencyStatus } from './components/DependencyStatus.js';
import { Home } from './components/Home.js';
import { BasicInfo } from './components/BasicInfo.js';
import { PersonalInfo } from './components/PersonalInfo.js';
import { DependentSimplifiedEFC } from './components/DependentSimplifiedEFC.js';
import { Header } from './components/Header.js';
import { store } from './reducers/store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router >
          <div className="App">
            <Header />
            <Route exact path="/" component={Home}/>
            <Route path="/basic-info" component={BasicInfo}/>
            <Route path="/dependency-status" component={DependencyStatus}/>
            <Route path="/personal-info" component={PersonalInfo}/>
            <Route path="/simplified-dependent-efc" component={DependentSimplifiedEFC} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
