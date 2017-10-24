import React, { Component } from 'react';
import { Checkbox } from '@blueprintjs/core';

import { simplifiedCalculationConditions } from '../config/simplifiedFormula.js';

// TODO: rename this page to something more appropriate
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
    if (checkedConditions.includes("combined_income_under_threshold")
      && checkedConditions.length > 1) {
        this.props.history.push("/simplified-dependent-efc")
      } else {
        // TODO: redirect to original formula
        alert("Default dependent efc calculator not implemented. ")
      }
  }

  render = () => {
    return (
      <div className="container">
        <div className="centered-container">
            <div>
              <div className="pt-ui-text-large">
                There are two possible EFC formulas for dependent students. Let's figure out which one applies to you.
                <br/>
                Check all of the following that are true.
              </div>
              <div className="checkbox-container">
                { this.renderCheckboxes() }
              </div>
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
      };

      return (
        <Checkbox checked={condition.checked} onChange={handleCheckedChange}>
          {condition.description}
        </Checkbox>
      );
    })
  }
}

export const BasicInfo = basicInfo;