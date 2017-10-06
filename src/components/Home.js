import React, { Component } from 'react';

class home extends Component {

  handleContinueClick = () => {
    // TODO: dispatch name to redux
    // TODO: redirect to actual next page
    this.props.history.push("/personal-info")
  }

  render = () => {
    return (
      <div className="container">
        <div className="centered-container">
            <div className="centered-text">
              <div className="pt-ui-text-large">
                Hi there! Who's going to fill out this FAFSA?
                Please enter your first name.
              </div>
              <div className="centered-input">
                <input class="pt-input" type="text" placeholder="First Name" dir="auto" />
              </div>
            </div>
        </div>
        <div className="bottom-control">
          <button type="button" class="pt-button pt-intent-primary" onClick={this.handleContinueClick}>
            Continue
            <span class="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
          </button>
        </div>
      </div>
    );
  }
}

export const Home = home;
