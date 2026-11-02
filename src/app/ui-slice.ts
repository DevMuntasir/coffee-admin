import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
export type Theme = 'light' | 'dark';
interface UiState {
  theme: Theme;
}
const initialState: UiState = { theme: 'light' };
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
  },
});
export const { setTheme } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
