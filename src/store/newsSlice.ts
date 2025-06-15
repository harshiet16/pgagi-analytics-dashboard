// src/store/newsSlice.ts

import { createSlice, createAsyncThunk, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { getNewsByCategory } from '../services/newsService';

// Define the shape of one article
export interface Article {
  title: string;
  description?: string;
  content?: string;
  url: string;
  urlToImage?: string;
  source: { name: string };
  publishedAt?: string;
}

// Define the slice state
interface NewsState {
  articles: Article[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentCategory: string;
  totalResults: number;
  hasMore: boolean;
}

const initialState: NewsState = {
  articles: [],
  status: 'idle',
  error: null,
  currentCategory: 'technology',
  totalResults: 0,
  hasMore: true,
};

// Thunk: fetch a page of news for a category
export const fetchNews = createAsyncThunk<
  { articles: Article[]; totalResults: number },
  { category: string; page: number }
>(
  'news/fetchNews',
  async ({ category, page }) => {
    return await getNewsByCategory(category, page);
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.currentCategory = action.payload;
      state.articles = [];
      state.totalResults = 0;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        
        // Ensure articles is always an array before accessing length
        const fetchedArticles = action.payload.articles || []; 

        // If we're on page 1, replace; otherwise append
        if (state.articles.length === 0) {
          state.articles = fetchedArticles;
        } else {
          state.articles = state.articles.concat(fetchedArticles);
        }

        state.totalResults = action.payload.totalResults;
        state.hasMore = state.articles.length < state.totalResults;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load news';
      });
  },
});

export const { setCategory } = newsSlice.actions;

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default newsSlice.reducer;
