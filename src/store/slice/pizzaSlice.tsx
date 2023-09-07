import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDataList } from '@/API/firebase'


export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async () => {
      const response = await getDataList('pizza');
      if (response === null) {
        throw new Error('Произошла ошибка. Проверь URL');
      }
      return response
    }
)


export interface PizzaState {
    loading: 'pending' | 'succeeded' | 'failed',
    error: string,
    pizzaArray: any[],
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
        .addCase(fetchPizza.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.pizzaArray = action.payload;
        })
        .addCase(fetchPizza.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || 'Произошла ошибка';; 
        });
    },
})


export default pizzaSlice.reducer
