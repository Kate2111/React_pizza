import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';


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
    setActiveCategoryIndex: (state, action: PayloadAction<number>) => {
        state.activeCategoryIndex = action.payload;
    },

    setSelectedSort: (state, action: PayloadAction<string>) => {
        state.selectedSort = action.payload;
    },

    setSearchValue: (state, action: PayloadAction<string>) => {
        state.searchValue = action.payload
    },
  },
})


export const filterState = (state: RootState) => state.filter
export const { setActiveCategoryIndex, setSelectedSort,setSearchValue } = filterSlice.actions

export default filterSlice.reducer