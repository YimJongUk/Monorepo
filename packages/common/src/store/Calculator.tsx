import { createSlice } from '@reduxjs/toolkit';
interface CalcNum {
  num: number;
}

const initialState: CalcNum = {
  num: 0
};

const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    inc(state) {
      state.num += 1;
    },
    dec(state) {
      state.num -= 1;
    }
  }
});

export const { inc, dec } = calcSlice.actions;

export default calcSlice.reducer;
