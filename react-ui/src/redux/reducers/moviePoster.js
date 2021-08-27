import { Get_MOVIE_POSTER } from '../actionTypes';

const initialState = "";

function moviePosterReducer (state=initialState, action) {
  if (action.type === Get_MOVIE_POSTER) {
    return action.payload.moviePoster;
  }
  return state;
};

export default moviePosterReducer;