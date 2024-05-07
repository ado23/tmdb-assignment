import { combineReducers } from "@reduxjs/toolkit";

/* Import all reducers */
import mediaReducer from "features/media/store/mediaSlice";
import moviesReducer from "pages/movies/store/moviesSlice";
import tvShowsReducer from "pages/tv-shows/store/tvShowsSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
  tvShows: tvShowsReducer,
  media: mediaReducer
});

export default rootReducer;
