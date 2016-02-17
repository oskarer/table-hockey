import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import PlayerField from './PlayerField';
import GamesDropdown from './GamesDropdown';

export default class NewGame extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { games, players, actions } = this.props;
    const playerFields = players.map((player, index) => {
      return (<PlayerField key={index} player={player} index={index}
        playerChanged={actions.updateName} removePlayer={actions.removePlayer}
      />);
    });
    return (
      <div className="container">
        <div className="new-form">
          <h1 className="title">Spelare</h1>

            {playerFields}
            <a className="button" onClick={actions.addPlayer}>Lägg till
            </a>
          <hr />
          <h1 className="title">Antal spel</h1>
            <GamesDropdown games={games} onChange={actions.updateGames} />
          <hr />
          <h1 className="title">Möten</h1>
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
          <p className="control">
            <a className="button is-large is-primary is-pulled-right">Starta</a>
          </p>
        </div>
      </div>
    );
  }
}

NewGame.propTypes = {
  games: PropTypes.number.isRequired,
  players: PropTypes.instanceOf(List),
  actions: PropTypes.object.isRequired
};
