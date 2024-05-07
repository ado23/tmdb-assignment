import { createAsyncThunk } from "@reduxjs/toolkit";

import BaseApi from "api/baseApi";
import { MovieTopRatedListParams, SearchMovieParams, MovieDetailsParams } from "api/generatedApi";
import { MoviesThunkNames } from "store/thunkNames";

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

export const searchMovies = createAsyncThunk(
  MoviesThunkNames.SearchMovies,
  async (requestData: SearchMovieParams, { rejectWithValue }) => {
    try {
      const { data: response } = await BaseApi.searchMovie(requestData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMovieDetails = createAsyncThunk(
  MoviesThunkNames.GetMovieDetails,
  async (requestData: MovieDetailsParams, { rejectWithValue }) => {
    try {
      const { data: response } = await BaseApi.movieDetails(requestData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
