import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsState {
  data: any[];
  loading: boolean;
}

const initialState: NewsState = {
  data: [],
  loading: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setNewsData, setLoading } = newsSlice.actions;
export default newsSlice.reducer;
