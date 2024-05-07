import { createSlice } from "@reduxjs/toolkit";

import { MovieDetailsData, MovieTopRatedListData } from "api/generatedApi";
import { getMovieDetails, getMovies, searchMovies } from "pages/movies/services/moviesThunks";

export interface IMoviesState {
  data: MovieTopRatedListData["results"];
  selected: MovieDetailsData | null;
  results: number;
  isLoading: boolean;
}

const initialState: IMoviesState = {
  data: [],
  selected: null,
  isLoading: false,
  results: 0
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
      state.data = action.payload.results?.slice(0, 10) ?? [];
      state.results = action.payload.results?.length ?? 0;
    });
    builder.addCase(getMovies.rejected, (state) => {
      state.isLoading = false;
    });
    /* Search movies */
    builder.addCase(searchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results?.slice(0, 10) ?? [];
      state.results = action.payload.results?.length ?? 0;
    });
    builder.addCase(searchMovies.rejected, (state) => {
      state.isLoading = false;
    });

    /* Get movie details */
    builder.addCase(getMovieDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selected = action.payload;
    });
    builder.addCase(getMovieDetails.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default moviesSlice.reducer;
