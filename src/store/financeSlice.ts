import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FinanceState {
  data: any;
  loading: boolean;
}

const initialState: FinanceState = {
  data: null,
  loading: false,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setFinanceData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setFinanceData, setLoading } = financeSlice.actions;
export default financeSlice.reducer;
