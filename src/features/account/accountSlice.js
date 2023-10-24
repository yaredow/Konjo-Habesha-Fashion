import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
    updatePassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { updateName, updateEmail, updatePassword } = accountSlice.actions;

export default accountSlice.reducer;
