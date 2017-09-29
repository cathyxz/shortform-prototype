import React, { Component } from 'react';
import { Checkbox } from '@blueprintjs/core';
import { dependencyStatusConditions } from '../config/dependency.js';

class dependencyStatus extends Component {

  constructor(props) {
      super(props);
      this.state = {
        conditions: dependencyStatusConditions,
      };
  }

  render = () => {
    return (
      <div className="container">
          <h1>Dependency Status</h1>
          <div class=".pt-ui-text">
            Do any of the following apply?
          </div>
          {this.renderCheckboxes()}
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

export const DependencyStatus = dependencyStatus;
