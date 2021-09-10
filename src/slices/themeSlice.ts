import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark',
  reducers: {
    toggleTheme: (state) => {
      if(state === 'dark'){
        return 'light'
      }

      return 'dark'
    }
  }
})

export const {
  toggleTheme
} = themeSlice.actions;

export default themeSlice.reducer;