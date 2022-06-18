import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../Authentication/AuthReducer'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { apiJokes } from '../../pages'
import BaseReducer from '../Base/base'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    base: BaseReducer,
    [apiJokes.reducerPath]: apiJokes.reducer,
  },middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiJokes.middleware),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch