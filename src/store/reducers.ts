import { combineReducers } from "@reduxjs/toolkit";

/* Import all reducers */
import moviesReducer from "pages/movies/store/movies-slice";

const rootReducer = combineReducers({
  movies: moviesReducer
});

export default rootReducer;
