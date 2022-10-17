import { configureStore } from '@reduxjs/toolkit'
import toggleSlice from './slices/toggleSlice';

export default configureStore({
  reducer: {
    toggleSlice
  },
})