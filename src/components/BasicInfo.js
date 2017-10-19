import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from '@blueprintjs/core';

import { UPDATE_BASIC_INFO } from '../reducers/BasicInfoReducer.js';
import { simplifiedCalculationConditions } from '../config/simplifiedFormula.js';

class basicInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      conditions: simplifiedCalculationConditions,
    };
  }

  handleContinueClick = (event) => {
    const checkedConditions = this.state.conditions
      .filter((condition) => condition.checked)
      .map((condition) => condition.condition);
    if (checkedConditions.findIndex("combined_income_under_threshold") >= 0
      && checkedConditions.length > 1) {
        // TODO: redirect to simplified formula
      } else {
        // TODO: redirect to original formula
      }
  }

  render = () => {
    const firstName = this.props.firstName;
    return (
      <div className="container">
        <div className="centered-container">
            <div className="centered-text">
              <div className="pt-ui-text-large">
                There are two possible EFC formulas for dependent students. Let's figure out which one applies to you.
                <br/>
                Check all of the following that are true.
              </div>
              <div className="checkbox-container">
                { this.renderCheckboxes() }
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

  renderCheckboxes = () => {
    return this.state.conditions.map((condition) => {
      const handleCheckedChange = () => {
        const updatedConditions = Array.from(this.state.conditions)
          .map((c) => {
            return c.condition === condition.condition
              ? {...c, checked: !c.checked}
              : c;
          });
        this.setState({
          conditions: updatedConditions,
        });
      }
      return (
        <Checkbox checked={condition.checked} onChange={handleCheckedChange}>
          {condition.description}
        </Checkbox>
      );
    })
  }
}

export const BasicInfo = basicInfo;