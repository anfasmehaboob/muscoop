import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../base-config/base'
import { ApiKit } from '../Base/base'
export interface AuthState {
  value: number
}

const initialState: AuthState = {
  value: 0
}

export const Authentication = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: { value: number }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state: { value: number }) => {
      state.value -= 1
    },
    incrementByAmount: (state: { value: number }, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = Authentication.actions

export default Authentication.reducer