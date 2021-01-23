import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  news: [],
  status: "idle",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsAdded: {
      reducer(state, action) {
        state.news.push(...action.payload);
      },
    },
    newsUpdated(state, action) {
      const { id, image, desc } = action.payload;
      const existingObject = state.news.find((newsItem) => newsItem.id === id);
      if (existingObject) {
        existingObject.desc = desc;
      }
    },
    setLoadingStatus(state, action) {
      state.status = "loading";
    },
    setResultStatus(state, action) {
      if (action.payload) {
        state.status = "success";
      } else {
        state.status = "error";
      }
    },
  },
});
const fetchNews = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(newsSlice.actions.setLoadingStatus());
      const response = await axios.get("/api/getNewsList?count=5");
      dispatch(newsAdded(response.data));
      dispatch(newsSlice.actions.setResultStatus(true));
    } catch (e) {
      dispatch(newsSlice.actions.setResultStatus(false));
    }
  };
};

export const { newsAdded, newsUpdated } = newsSlice.actions;

export default newsSlice.reducer;

export { fetchNews };

export const selectAllNews = (state) => state.news.news;

export const selectNewsByID = (state, newsId) =>
  state.news.news.find((newsItem) => newsItem.id === newsId);
