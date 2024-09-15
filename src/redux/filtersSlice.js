import { createSlice } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.filters.name;

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = slice.actions;
export default slice.reducer;
