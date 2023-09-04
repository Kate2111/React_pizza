import { createSlice } from '@reduxjs/toolkit'


export interface CategoryState {
    activeCategoryIndex: number,
    selectedSort: string,
    categories: string[],
    searchValue: string,
    value: any
}

const initialState: CategoryState = {
    activeCategoryIndex: 0,
    selectedSort: '',
    categories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
    searchValue: '',
    value: ''
}

export const filterSlice = createSlice({

  name: 'filter',
  initialState,
  reducers: {
    setActiveCategoryIndex: (state, action) => {
        state.activeCategoryIndex = action.payload;
    },

    setSelectedSort: (state, action) => {
        state.selectedSort = action.payload;
    },

    setSearchValue: (state, action) => {
        console.log(state.searchValue)
        state.searchValue = action.payload
    },
  },
})


export const { setActiveCategoryIndex, setSelectedSort,setSearchValue } = filterSlice.actions

export default filterSlice.reducer