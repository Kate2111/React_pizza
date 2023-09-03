import { createSlice } from '@reduxjs/toolkit'


export interface CategoryState {
    activeIndex: number
}

const initialState: CategoryState = {
    activeIndex: 0,
}

export const activeCategorySlice = createSlice({
  name: 'categoryIndex',
  initialState,
  reducers: {
    setActiveIndex: (state, action) => {
        state.activeIndex = action.payload;
    }
  },
})


export const { setActiveIndex } = activeCategorySlice.actions

export default activeCategorySlice.reducer