import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TMediaState = {
  query: {
    searchTerm: string;
  };
};

const initialState: TMediaState = {
  query: {
    searchTerm: ""
  }
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>): TMediaState => {
      state.query.searchTerm = action.payload;
      return state;
    },

    resetSearchTerm: (state: TMediaState): TMediaState => {
      state.query.searchTerm = "";
      return state;
    }
  }
});

export const { setSearchTerm, resetSearchTerm } = mediaSlice.actions;
export default mediaSlice.reducer;
