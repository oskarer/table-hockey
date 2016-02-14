import React, { Component, PropTypes } from 'react';

export default class PlayerField extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { player, personChanged } = this.props;
    const value = event.target.value;
    personChanged(value, player.get('id'));
  }
  render() {
    const { player } = this.props;
    return (
      <input className="input"
        type="text" placeholder="Text input"
        value={player.get('value')}
        onChange={this.handleChange}
      />
    );
  }
}

PlayerField.propTypes = {
  player: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  personChanged: PropTypes.func.isRequired
};
