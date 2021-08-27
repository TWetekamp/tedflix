import { UPDATE_MOVIE_DETAIL } from '../actionTypes';

const initialState = {
  storyline: "I like nachos.",
  comments: "I like nachos."
};

function movieDetailReducer (state=initialState, action) {
  if (action.type === UPDATE_MOVIE_DETAIL) {
    return action.payload.selectedMovie;
  }
  return state;
};

export default movieDetailReducer;