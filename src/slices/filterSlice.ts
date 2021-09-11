import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Filter = string;

export const ALL: Filter = 'ALL';
export const ACTIVE: Filter = 'ACTIVE';
export const COMPLETED: Filter = 'COMPLETED';

type FilterType = {
  type: Filter,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    type: ALL,
  } as FilterType,
  reducers: {
    changeFilter: (state, action: PayloadAction<Filter>) => {
      state.type = action.payload
    }
  }
})

export const {
  changeFilter
} = filterSlice.actions;

export default filterSlice.reducer;