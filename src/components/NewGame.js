import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import PlayerField from './PlayerField';

export default class NewGame extends Component {
  constructor() {
    super();
  }
  render() {
    const { players, actions } = this.props;

    const playerFields = players.map((player, index) => {
      return (<PlayerField key={index} player={player} index={index}
        personChanged={actions.updateName}
      />);
    });
    return (
      <div className="container">
        <div className="new-form">
          <h1 className="title">Spelare</h1>
          <p className="control">
            {playerFields}
            <a className="button">Lägg till</a>
          </p>
          <hr />
          <h1 className="title">Antal spel</h1>
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
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
  players: PropTypes.instanceOf(List),
  actions: PropTypes.object.isRequired
};
