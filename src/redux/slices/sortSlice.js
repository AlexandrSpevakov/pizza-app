import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
};

export const sortSlice = createSlice({
  name: "activeSort",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const selectSort = state => state.activeSort.index;

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;
