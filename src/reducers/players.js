import Immutable, { List } from 'immutable';
import { UPDATE_NAME } from '../constants/ActionTypes';

const initialState = Immutable.fromJS([{
  name: '',
  id: 0
}]);

export default function players(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      const player = state.findIndex((item) => {
        return item.get('id') === action.id;
      });
      return state.update(player, (item) => {
        return item.set('name', action.text);
      }
    );
    default:
      return state;
  }
}
