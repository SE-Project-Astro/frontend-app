import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import {fetchAstroObjects} from "./astroObjectSlice";

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
const fetchNews =  () => {
    return async (dispatch, getState) =>
    {
        try {
            dispatch(newsSlice.actions.setLoadingStatus())
            const response = await axios.get('/api/getNewsList?count=5')
            console.log(response)
            dispatch(newsAdded(response.data))
            dispatch(newsSlice.actions.setResultStatus(true))
        }
        catch (e) {
            dispatch(newsSlice.actions.setResultStatus(false))
        }
  };
};

const addNewNews = (name, image, cardText, content) => {
    const newsData = {
        "Title": name,
        "Image": image,
        "CardText": cardText,
        "Desc" : content,
        "tStamp": ""
    }
    return async (dispatch, getState) => {
        try {
            dispatch(newsSlice.actions.setLoadingStatus());
            const response = await axios.post(`/api/AddNews`, newsData)
            dispatch(newsSlice.actions.setResultStatus(true))
            dispatch(fetchNews())
            return response.data;
        } catch (e) {
            dispatch(newsSlice.actions.setResultStatus(false))
            return e.message;
        }
    }
}

export const { newsAdded, newsUpdated } = newsSlice.actions;

export default newsSlice.reducer;

export { fetchNews };

export const selectAllNews = (state) => state.news.news;

export const selectNewsByID = (state, newsId) =>
  state.news.news.find((newsItem) => newsItem.id === newsId);
