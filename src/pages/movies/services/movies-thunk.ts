import { createAsyncThunk } from "@reduxjs/toolkit";

import BaseApi from "api/base-api";
import { MovieTopRatedListParams } from "api/generatedApi";
import { MoviesThunkNames } from "store/thunk-names";

export const getMovies = createAsyncThunk(
  MoviesThunkNames.GetTopRatedMovies,
  async (requestData: MovieTopRatedListParams, { rejectWithValue }) => {
    try {
      const { data: response } = await BaseApi.movieTopRatedList(requestData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
