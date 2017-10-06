import React, { Component } from 'react';
import { Radio, RadioGroup } from '@blueprintjs/core';

class personalInfo extends Component {

  constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        gender: "male",
        citizenshipStatus: "yes",
      };
  }

  // TODO: Next Button
  // TODO: Add validators
  render = () => {
    return (
      <div className="container">
        <h1>Personal Info</h1>
        <div>
          Let's get some info so we can setup your program.
        </div>
        {this.renderBasicPersonalInfo()}
        {this.renderIdentificationInfo()}
      </div>
    );
  }

  renderBasicPersonalInfo = () => {
    return (
      <div className="pt-form-group">
          <label className="pt-label">First Name</label>
          <div className="pt-form-content">
            <input className="pt-input" type="text" placeholder="John" dir="auto" />
          </div>
          <label className="pt-label">Last Name</label>
          <div className="pt-form-content">
            <input className="pt-input" type="text" placeholder="Doe" dir="auto" />
          </div>

          <label className="pt-form-content">Email</label>
          <div className="pt-form-content">
            <input className="pt-input" type="text" placeholder="johndoe@example.com" dir="auto" />
        </div>
          <label className="pt-label">Phone Number</label>
          <div className="pt-form-content">
            <input className="pt-input" type="text" placeholder="123-456-7890" dir="auto" />
        </div>
      </div>
    );
  }

  renderIdentificationInfo = () => {
    return (
      <div className="pt-form-group">
        <RadioGroup
          label="Gender"
          selectedValue={this.state.gender}
          >
          <Radio label="Male" value="male" />
          <Radio label="Female" value="female" />
        </RadioGroup>
        <label className="pt-label">Date of Birth</label>
        <div className="pt-form-content">
          <input class="pt-input" type="text" placeholder="mm/dd/yyyy" dir="auto" />
        </div>
        <span>Social Security Number</span>
        <div className="pt-form-content">
          <input class="pt-input" type="text" placeholder="123-123-1234" dir="auto" />
        </div>
        <span>Home Address</span>
        <div className="pt-form-content">
          <input class="pt-input" type="text" placeholder="10 Baker St" dir="auto" />
        </div>
        <RadioGroup
          label="Citizenship Status"
          selectedValue={this.state.citizenshipStatus}
          >
          <Radio label="Yes, I am a US Citizen" value="yes" />
          <Radio label="No, I am not a US Citizen" value="no" />
        </RadioGroup>
      </div>
    );
  }
}

export const PersonalInfo = personalInfo;
