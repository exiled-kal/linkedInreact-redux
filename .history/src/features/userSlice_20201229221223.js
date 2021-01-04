import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.value += 1;
    },

    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const {increment, decrement, incrementByAmount} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
