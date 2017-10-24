import React, { Component } from 'react';

class dependentSimplifiedEFC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalParentIncome: 0,
    };
  }

  handleContinueClick = (event) => {
    // TODO: display EFC
  }

  render = () => {
    return (
      <div className="container">
        <div className="centered-container">
            <div className="centered-text">
              <div className="pt-ui-text-large">
                Since the student is a dependent, the parents' combined income is less than $49,999, and other relevant conditions are satisfied, we can use a simplified EFC formula to calculate your EFC.
              </div>
              <div>
                <h2>Parents' Contribution</h2>
                <h3>Parents Income in 2015</h3>
                <input className="pt-input form-input-standard" type="text" ref="	AdjustedGrossIncome" placeholder="Adjusted	Gross Income" dir="auto" />

                <input className="pt-input form-input-standard" type="text" ref="parentAIncome" placeholder="Parent A Income" dir="auto" />

                <input className="pt-input form-input-standard" type="text" ref="parentBIncome" placeholder="Parent B Income" dir="auto" />

                <input className="pt-input form-input-standard pt-disabled" type="text" ref="totalParentIncome" value={this.state.totalParentIncome} placeholder="Total Parent Income" dir="auto" />

                <h3>Allowances Against Parents' Income</h3>

                <h3>Available Income</h3>

                <h3>Resulting Parents' Contribution</h3>

                <h2>Students' Contribution</h2>

                <h3>Student's Income in 2015</h3>

                <h3>Allowances Against Student's Income</h3>

                <h3>Resulting Student's Contribution</h3>

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

export const DependentSimplifiedEFC = dependentSimplifiedEFC;