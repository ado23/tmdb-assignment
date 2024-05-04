import { createSlice } from "@reduxjs/toolkit";

import { MovieTopRatedListData } from "api/generatedApi";
import { getMovies } from "pages/movies/services/movies-thunk";

export interface IMoviesState {
  data: MovieTopRatedListData["results"];
  isLoading: boolean;
}

const initialState: IMoviesState = {
  data: [],
  isLoading: false
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Get top rated movies */
    builder.addCase(getMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results ?? [];
    });
    builder.addCase(getMovies.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default moviesSlice.reducer;
