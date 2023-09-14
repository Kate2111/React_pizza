import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDataList } from '@/API/firebase'
import { TPizzaItem } from '@/types/types';
import { RootState } from '../store';


export const fetchPizza = createAsyncThunk<TPizzaItem[], string>(
    'pizza/fetchPizzaStatus',
    async (recourse) => {
      const response = await getDataList(recourse);
      if (response === null) {
        throw new Error('Произошла ошибка. Проверь URL');
      }
      return response 
    }
)


export interface PizzaState {
    loading: 'pending' | 'succeeded' | 'failed',
    error: string,
    pizzaArray: TPizzaItem[],
    pizzaTypeName: string[],
    pizzaSizeNumber: number[],
}

const initialState: PizzaState = {
    loading: 'pending',
    error: '',
    pizzaArray: [],
    pizzaTypeName: ['тонкое', 'традиционное'],
    pizzaSizeNumber: [ 26, 30, 40],
}

export const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPizza.pending, (state) => {
            state.loading = 'pending';
        })
        .addCase(fetchPizza.fulfilled, (state, action: PayloadAction<TPizzaItem[]>) => {
            state.loading = 'succeeded';
            state.pizzaArray = action.payload;
        })
        .addCase(fetchPizza.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || 'Произошла ошибка';; 
        });
    },
})

export const pizzaState = (state: RootState) => state.pizzas
export default pizzaSlice.reducer
