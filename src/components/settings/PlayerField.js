import React, { Component, PropTypes } from 'react';

export default class PlayerField extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.remove = this.remove.bind(this);
  }
  handleChange(event) {
    const { player, playerChanged } = this.props;
    const value = event.target.value;
    playerChanged(value, player.get('id'));
  }
  remove() {
    const { player, removePlayer } = this.props;
    removePlayer(player.get('id'));
  }
  render() {
    const { player } = this.props;
    return (
      <div>
        <p className="control">
          <input className="input"
            type="text" placeholder="Text input"
            value={player.get('name')}
            onChange={this.handleChange}
          />
          <a onClick={this.remove}>X</a>
        </p>
      </div>
    );
  }
}

PlayerField.propTypes = {
  player: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  playerChanged: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
};
