import React, { Component } from 'react';

class header extends Component {

  render = () => {
    return (
      <div id="shortform-header">
          <h1 className="header-title">EFC Estimator</h1>
          <p className="header-subtitle">Estimate your expected financial contribution for college</p>
      </div>
    );
  }

}

export const Header = header;
