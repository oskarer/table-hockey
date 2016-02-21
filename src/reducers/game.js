import Immutable from 'immutable';
import {
  START_GAME
} from '../constants/actionTypes';

const initialSets = [[{
  p1: 0,
  p2: 1
}], [{
  p1: 0,
  p2: 2,
}], [{
  p1: 1,
  p2: 2
}]];

const initialState = Immutable.fromJS({
  sets: initialSets,
  started: false
});

export default function (state = initialState, action) {
  switch (action.type) {

    case START_GAME: {
      // const { players, matches, games } = action;
      // const matches = _(players).map((player) => {
      //   const opponents = _(players).filter((opponent) =>
      //     opponent.id !== player.id);
      //   return _(opponents).map((opponent) => ({
      //     p1: player,
      //     p2: opponent
      //   })).value();
      // });
      // console.log(matches.value());

      return state.set('started', true);

    }
    default:
      return state;
  }
}
