import React, { Component, PropTypes } from 'react';

export default class GamesDropdown extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { onChange } = this.props;
    onChange(parseInt(event.target.value, 10));
  }
  render() {
    const { games } = this.props;
    const optionValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const options = optionValues.map((number) => {
      return (
        <option key={number} value={number}>{number}</option>
      );
    });
    return (
      <p className="control">
        <span className="select">
          <select value={games} onChange={this.handleChange}>
            {options}
          </select>
        </span>
      </p>
    );
  }
}

GamesDropdown.propTypes = {
  games: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
