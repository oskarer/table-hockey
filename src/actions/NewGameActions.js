import { UPDATE_NAME } from '../constants/ActionTypes';

export function updateName(text, id) {
  return {
    type: UPDATE_NAME,
    text,
    id
  };
}
