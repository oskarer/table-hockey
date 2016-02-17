import {
  UPDATE_NAME,
  ADD_PLAYER,
  REMOVE_PLAYER,
  UPDATE_GAMES } from '../constants/ActionTypes';

export function updateName(text, id) {
  return {
    type: UPDATE_NAME,
    text,
    id
  };
}

export function addPlayer() {
  return {
    type: ADD_PLAYER
  };
}

export function removePlayer(id) {
  return {
    type: REMOVE_PLAYER,
    id
  };
}

export function updateGames(number) {
  return {
    type: UPDATE_GAMES,
    number
  };
}
