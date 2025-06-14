import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  data: any;
  loading: boolean;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setWeatherData, setLoading } = weatherSlice.actions;
export default weatherSlice.reducer;
