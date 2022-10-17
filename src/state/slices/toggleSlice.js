import { createSlice } from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
  name: 'counter',
  initialState: {
    value: true,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
})

export const { toggle } = toggleSlice.actions

export default toggleSlice.reducer