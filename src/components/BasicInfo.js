import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UPDATE_BASIC_INFO } from '../reducers/BasicInfoReducer.js';

class basicInfo extends Component {

  handleContinueClick = (event) => {
    const info = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
    };
    // TODO: redirect to actual next page
    this.props.updateBasicInfo(info);
    // this.props.history.push("/personal-info")
  }

  render = () => {
    const firstName = this.props.firstName;
    return (
      <div className="container">
        <div className="centered-container">
            <div className="centered-text">
              <div className="pt-ui-text-large">
                Nice to meet you {firstName}! A few more details so we can save your progress.
              </div>
              <div className="centered-input">
                <input className="pt-input" type="text" ref="firstName" defaultValue={firstName} placeholder="First Name" dir="auto" />
                <input className="pt-input" type="text" ref="lastName" placeholder="Your last name" dir="auto" />
                <input className="pt-input" type="text" ref="email" placeholder="Email" dir="auto" />
                <input className="pt-input" type="text" ref="phone" placeholder="Phone" dir="auto" />
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
    updateBasicInfo: (info) => {
      dispatch({
        type: UPDATE_BASIC_INFO,
        payload: info,
      });
    }
  };
}

export const BasicInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(basicInfo);