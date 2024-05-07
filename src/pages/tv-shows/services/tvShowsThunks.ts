import { createAsyncThunk } from "@reduxjs/toolkit";

import BaseApi from "api/baseApi";
import {
  TvSeriesTopRatedListParams,
  SearchTvParams,
  TvSeriesDetailsParams
} from "api/generatedApi";
import { TvShowsThunkNames } from "store/thunkNames";

export const getTvShows = createAsyncThunk(
  TvShowsThunkNames.GetTopRatedTvShows,
  async (requestData: TvSeriesTopRatedListParams, { rejectWithValue }) => {
    try {
      const { data: response } = await BaseApi.tvSeriesTopRatedList(requestData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchTvShows = createAsyncThunk(
  TvShowsThunkNames.SearchTvShows,
  async (requestData: SearchTvParams, { rejectWithValue }) => {
    try {
      const { data: response } = await BaseApi.searchTv(requestData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getTvShowDetails = createAsyncThunk(
  TvShowsThunkNames.GetTvShowDetails,
  async (requestData: TvSeriesDetailsParams, { rejectWithValue }) => {
    try {
      const { data: response } = await BaseApi.tvSeriesDetails(requestData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
