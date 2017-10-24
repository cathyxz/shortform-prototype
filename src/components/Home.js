import React, { Component } from 'react';

class home extends Component {

  handleContinueClick = () => {
    this.props.history.push("/basic-info")
  }

  renderText = () => {
    return (
      <div className="pt-ui-text-large">
        For now, let's assume that you're a dependent student.
        <br/>
        Is your parents combined income equal to or less than $25,000?
        <br/>
        If yes, your EFC is zero. If not, let's click next.
      </div>
    );
  }

  render = () => {
    return (
      <div className="container">
        <div className="centered-container">
            <div className="centered-text">
              {this.renderText()}
            </div>
            <div className="button-control">
              <button type="button" className="pt-button pt-intent-primary" onClick={this.handleContinueClick}>
                Next
                <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
              </button>
            </div>
        </div>
      </div>
    );
  }
}

export const Home = home;