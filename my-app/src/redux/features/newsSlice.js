import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  news: [],
  filter: [],
};

export const getUsers = createAsyncThunk(
  "newsStore/getUsers",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(setUsers(res.data));
  }
);

const newsSlice = createSlice({
  name: "newsStore",
  initialState,
  reducers: {
    fetchedNews: (state = initialState, action) => {
      state.news = action.payload;
    },
    addNewStore: (state = initialState, action) => {
      state.news = [...state.news, action.payload];
    },

    removeNew: (state = initialState, action) => {
      state.news = state.news.filter((el) => el.id !== action.payload);
    },

    setUsers: (state = initialState, action) => {
      state.users = action.payload;
    },
  },

  extraReducer: {
    [getUsers.pending]: () => {
      console.log("pending");
    },
    [getUsers.fulfilled]: () => {
      console.log("fullfilled");
    },
    [getUsers.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const { fetchedNews, addNewStore, removeNew, setUsers } =
  newsSlice.actions;
export default newsSlice.reducer;
