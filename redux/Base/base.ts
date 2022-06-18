import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { useEffect } from 'react'
import { baseUrl } from '../../base-config/base'
import { Cookies } from 'react-cookie'

var cookies = new Cookies();
export interface BaseConfig {
  
  token : string
}

const initialState: BaseConfig = {
  token: cookies.get("merchantToken")
}


export const ApiKit = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: {'X-Custom-Header': initialState.token}
});

export const BaseConfig = createSlice({
  name: 'baseconfig',
  initialState,
  reducers: {
    updateToken: (state: {token: string}, action: PayloadAction<string> ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.token = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { updateToken } = BaseConfig.actions

export default BaseConfig.reducer