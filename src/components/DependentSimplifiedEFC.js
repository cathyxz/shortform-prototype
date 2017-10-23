import React, { Component } from 'react';

class dependentSimplifiedEFC extends Component {

  handleContinueClick = (event) => {
    // TODO: display EFC
  }

  render = () => {
    return (
      <div className="container">
        <div className="centered-container">
            <div className="centered-text">
              <div className="pt-ui-text-large">

              </div>
            </div>
        </div>
        <div className="bottom-control">
          <button type="button" className="pt-button pt-intent-primary" onClick={this.handleContinueClick}>
            Next
            <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
          </button>
        </div>
      </div>
    );
  }

}

export const DependentSimplifiedEFC = dependentSimplifiedEFC;