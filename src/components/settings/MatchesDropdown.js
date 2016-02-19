import React, { Component, PropTypes } from 'react';

export default class MatchesDropdown extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { onChange } = this.props;
    onChange(parseInt(event.target.value, 10));
  }
  render() {
    const { matches } = this.props;
    const optionValues = [1, 2, 3, 4, 5];
    const options = optionValues.map((number) => {
      return (
        <option key={number} value={number}>{number}</option>
      );
    });
    return (
      <p className="control">
        <span className="select">
          <select value={matches} onChange={this.handleChange}>
            {options}
          </select>
        </span>
      </p>
    );
  }
}

MatchesDropdown.propTypes = {
  matches: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
