import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SAVE_FIRST_NAME } from '../reducers/BasicInfoReducer.js';

class basicInfo extends Component {

  handleContinueClick = (event) => {
    const firstName = "Cathy";
    // TODO: dispatch name to redux
    // TODO: redirect to actual next page
    this.props.saveFirstName(firstName);
    // this.props.history.push("/personal-info")
  }

  render = () => {
    const firstName = this.props.firstName;
    console.log(this.props);
    return (
      <div className="container">
        <div className="centered-container">
            <div className="centered-text">
              <div className="pt-ui-text-large">
                Nice to meet you {firstName}! A few more details so we can save your progress.
              </div>
              <div className="centered-input">
                <input className="pt-input" type="text" placeholder={firstName} dir="auto" />
              </div>
            </div>
        </div>
        <div className="bottom-control">
          <button type="button" className="pt-button pt-intent-primary" onClick={this.handleContinueClick}>
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

export const BasicInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(basicInfo);