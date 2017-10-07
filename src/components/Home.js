import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SAVE_FIRST_NAME } from '../reducers/BasicInfoReducer.js';

class home extends Component {

  handleContinueClick = (event) => {
    const firstName = event.target.value;
    console.log(firstName);
    console.log(event);
    // TODO: dispatch name to redux
    // TODO: redirect to actual next page
    this.props.saveFirstName(firstName);
    this.props.history.push("/basic-info")
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
                <input className="pt-input" type="text" placeholder="First Name" dir="auto" />
              </div>
            </div>
        </div>
        <div className="bottom-control">
          <button type="submit" className="pt-button pt-intent-primary" onClick={this.handleContinueClick}>
            Continue
            <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName
  }
}

const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    saveFirstName: (firstName) => {
      dispatch({
        type: SAVE_FIRST_NAME,
        payload: firstName,
      });
    }
  };
}

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(home);