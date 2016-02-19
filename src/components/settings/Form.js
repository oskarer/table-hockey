import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';
import PlayerField from './PlayerField';
import GamesDropdown from './GamesDropdown';
import MatchesDropdown from './MatchesDropdown';

export default class Settings extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { settings, actions } = this.props;
    const matches = settings.get('matches');
    const games = settings.get('games');
    const players = settings.get('players');
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
            <GamesDropdown games={games} onChange={actions.setGames} />
          <hr />
          <h1 className="title">Möten</h1>
            <MatchesDropdown matches={matches} onChange={actions.setMatches} />
          <p className="control">
            <a className="button is-large is-primary is-pulled-right"
              onClick={actions.startGame}>Starta</a>
          </p>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.instanceOf(Map),
  actions: PropTypes.object.isRequired
};
