import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: localStorage.getItem('theme') || 'light'};

const themeSlice = createSlice({
      name: 'theme',
      initialState,
      reducers: {
            light: (state) => {
                  state.theme = 'light';
                  localStorage.setItem('theme', state.theme)
            },
            dark: (state) => {
                  state.theme = 'dark';
                  localStorage.setItem('theme', state.theme)
            }
      }
})

export const { light, dark } = themeSlice.actions;
export default themeSlice.reducer;

