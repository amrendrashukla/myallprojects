import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 arrr:[
    {
        id:1,
        name:"club jana"
    },
    {
        id:2,
        name:"club nahi jana"
    },
 ]
}

export const TodoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItem: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.arrr = [...state.arrr,action.payload]
    },
    decrement: (state,action) => {
        console.log(action)
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, decrement, incrementByAmount } = TodoSlice.actions

export default TodoSlice.reducer