import {
    GET_USERNAME,
    UPDATE_MOVIES_LIST,
    UPDATE_MOVIE_DETAIL
    } from './actionTypes';

  export const updateUsername = username => {
    return {
      type: GET_USERNAME,
      payload: {
        username
      }
  }
};
  
  export const updateMovieDetail = movieInfo => {
    return {
      type: UPDATE_MOVIE_DETAIL,
      payload: {
        selectedMovie: movieInfo
      }
  }
};

export const updateMoviesList = moviesList => {
  return {
    type: UPDATE_MOVIES_LIST,
    payload: {
      moviesList
    }
  }
};