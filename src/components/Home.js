import React, { Component } from 'react';

class home extends Component {

  handleContinueClick = () => {
    this.props.history.push("/basic-info")
  }

  render = () => {
    return (
      <div className="container">
        <div className="centered-container">
            <div className="centered-text">
              <div className="pt-ui-text-large">
                For now, let's assume that you're a dependent student.
                <br/>
                Is your parents combined income equal to or less than $25,000?
                <br/>
                If yes, your EFC is zero. If not, let's click next.
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

export const Home = home;