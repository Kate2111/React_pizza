import { createSlice } from '@reduxjs/toolkit'


export interface LoadingState {
  isLoading: boolean
}

const initialState: LoadingState = {
  isLoading: true,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
        state.isLoading = action.payload;
    }
  },
})


export const { setIsLoading } = loadingSlice.actions

export default loadingSlice.reducer