import { createSlice } from "@reduxjs/toolkit";

import { TvSeriesDetailsData, TvSeriesTopRatedListData } from "api/generatedApi";
import { getTvShowDetails, getTvShows, searchTvShows } from "pages/tv-shows/services/tvShowsThunks";

export interface ITvShowsState {
  data: TvSeriesTopRatedListData["results"];
  selected: TvSeriesDetailsData | null;
  results: number;
  isLoading: boolean;
}

const initialState: ITvShowsState = {
  data: [],
  selected: null,
  isLoading: false,
  results: 0
};

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Get top rated tv shows */
    builder.addCase(getTvShows.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTvShows.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results?.slice(0, 10) ?? [];
      state.results = action.payload.results?.length ?? 0;
    });
    builder.addCase(getTvShows.rejected, (state) => {
      state.isLoading = false;
    });
    /* Search tv shows */
    builder.addCase(searchTvShows.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchTvShows.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results?.slice(0, 10) ?? [];
      state.results = action.payload.results?.length ?? 0;
    });
    builder.addCase(searchTvShows.rejected, (state) => {
      state.isLoading = false;
    });
    /* Get tv show details */
    builder.addCase(getTvShowDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTvShowDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selected = action.payload;
    });
    builder.addCase(getTvShowDetails.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default tvShowsSlice.reducer;
