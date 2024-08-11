import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      //state.loading = true;
      state.error = null;
    }, // action pojava koju hocu vratit spremit
    SignInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
    },
    SignInFailure: (state, action) => {
      // state.laoding = false;
      state.error = action.payload;
    },
  },
});

export const { signInStart, SignInFailure, SignInSuccess } = userSlice.actions;

export default userSlice.reducer;

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });
