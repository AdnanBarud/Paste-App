import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { pasteReducer } from './redux/pasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
})