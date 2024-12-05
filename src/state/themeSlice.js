import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: localStorage.getItem('theme') || 'light', icon: localStorage.getItem('icon') || 'moon' };

const themeSlice = createSlice({
      name: 'theme',
      initialState,
      reducers: {
            light: (state) => {
                  state.icon ='moon';
                  localStorage.setItem('theme', state.icon);
                  state.theme = 'light';
                  localStorage.setItem('theme', state.theme)
            },
            dark: (state) => {
                  state.icon = 'sun';
                  localStorage.setItem('icon', state.icon);
                  state.theme = 'dark';
                  localStorage.setItem('theme', state.theme)
            }
      }
})

export const { light, dark } = themeSlice.actions;
export default themeSlice.reducer;

