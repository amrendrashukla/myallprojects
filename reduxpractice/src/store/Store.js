import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice'
import TodoSlice from './TodoSlice'
export const Store = configureStore({
  reducer: {
    counter:CounterSlice,
    todo:TodoSlice

  },
})