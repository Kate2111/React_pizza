import { configureStore } from '@reduxjs/toolkit'
import pizzaSlice from './slice/pizzaSlice'
import loadingSlice from './slice/loadingSlice'
import filterSlice from './slice/filterSlice'

export const store = configureStore({
  reducer: {
    pizzas: pizzaSlice,
    loading: loadingSlice,
    filter: filterSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch