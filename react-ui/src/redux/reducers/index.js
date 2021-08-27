import { combineReducers } from "redux";
import username from './username';
import movieDetail from './movieDetail';
import moviesList from './moviesList'

export default combineReducers({ username, movieDetail, moviesList });