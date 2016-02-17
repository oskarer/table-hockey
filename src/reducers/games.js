import {
  UPDATE_GAMES } from '../constants/ActionTypes';

export default function (state = 1, action) {
  switch (action.type) {
    case UPDATE_GAMES:
      return action.number;
    default:
      return state;
  }
}
