import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

const accountSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setUser, setToken } = accountSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;

export default accountSlice.reducer;
