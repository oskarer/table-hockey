import Immutable from 'immutable';
import {
  UPDATE_NAME,
  ADD_PLAYER,
  REMOVE_PLAYER,
  SET_GAMES,
  SET_MATCHES,
  START_GAME } from '../constants/ActionTypes';
const initialPlayers = [{
  name: '',
  id: 0
}];

const initialState = Immutable.fromJS({
  players: initialPlayers,
  games: 1,
  matches: 2,
  started: false
});

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME: {
      const players = state.get('players');
      const playerIndex = players.findIndex((item) => {
        return item.get('id') === action.id;
      });
      return state.updateIn(['players', playerIndex, 'name'], () => action.text);
    }
    case ADD_PLAYER: {
      const newPlayerId = state.get('players').size > 0 ?
        state.get('players').last().get('id') + 1 : 0;
      const newPlayer = Immutable.fromJS({
        id: newPlayerId,
        name: '',
      });
      return state.updateIn(['players'], (players) => players.push(newPlayer));
    }
    case REMOVE_PLAYER: {
      const removeIndex = state.get('players').findIndex((item) => {
        return item.get('id') === action.id;
      });
      return state.updateIn(['players'],
        (players) => players.delete(removeIndex));
    }
    case SET_GAMES:
      return state.set('games', action.number);
    case SET_MATCHES:
      return state.set('matches', action.number);
    case START_GAME:
      return state.set('started', true);
    default:
      return state;
  }
}
