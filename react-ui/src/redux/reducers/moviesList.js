import { UPDATE_MOVIES_LIST } from '../actionTypes';

const initialState = [];

function moviesListReducer (state=initialState, action) {
  if (action.type === UPDATE_MOVIES_LIST) {
    return action.payload.moviesList;
  }
  return state;
};

export default moviesListReducer;