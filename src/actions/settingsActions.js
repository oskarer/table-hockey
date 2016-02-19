import {
  UPDATE_NAME,
  ADD_PLAYER,
  REMOVE_PLAYER,
  SET_GAMES,
  SET_MATCHES,
  START_GAME } from '../constants/ActionTypes';

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

export function setGames(number) {
  return {
    type: SET_GAMES,
    number
  };
}

export function setMatches(number) {
  return {
    type: SET_MATCHES,
    number
  };
}

export function startGame() {
  return {
    type: START_GAME
  };
}
