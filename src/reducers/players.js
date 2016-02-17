import Immutable from 'immutable';
import {
  UPDATE_NAME,
  ADD_PLAYER,
  REMOVE_PLAYER } from '../constants/ActionTypes';

const initialState = Immutable.fromJS([{
  name: '',
  id: 0
}]);

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      const updateIndex = state.findIndex((item) => {
        return item.get('id') === action.id;
      });
      return state.update(updateIndex, (item) => {
        return item.set('name', action.text);
      });
    case ADD_PLAYER:
      let newPlayerId = 0;
      if (state.size > 0) {
        newPlayerId = state.last().get('id') + 1;
      }
      const newPlayer = Immutable.fromJS({
        id: newPlayerId,
        name: '',
      });
      return state.push(newPlayer);
    case REMOVE_PLAYER:
      const removeIndex = state.findIndex((item) => {
        return item.get('id') === action.id;
      });
      return state.delete(removeIndex);
    default:
      return state;
  }
}
