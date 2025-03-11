import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: "none",
};
const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    loading: (state = initialState, action) => {
      state.loader = "loading";
    },
    loaded: (state = initialState, action) => {
      state.loader = "loaded";
    },
  },
});

export const { loading, loaded } = loaderSlice.actions;
export default loaderSlice.reducer;
