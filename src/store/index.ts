import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import financeReducer from './financeSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    finance: financeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
