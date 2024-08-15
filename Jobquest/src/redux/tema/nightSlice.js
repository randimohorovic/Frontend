import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const nightSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = nightSlice.actions;
export default nightSlice.reducer;
