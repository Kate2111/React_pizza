import { createSlice } from '@reduxjs/toolkit'


export interface PizzaState {
  pizzaArray: any[],
  pizzaTypeName: string[],
  pizzaSizeNumber: number[],
  pizzaPrice: number,
}

const initialState: PizzaState = {
  pizzaArray: [],
  pizzaPrice: 0,
  pizzaTypeName: ['тонкое', 'традиционное'],
  pizzaSizeNumber: [ 26, 30, 40],
  
}

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzaArray: (state, action) => {
        state.pizzaArray = action.payload;
    },
  },
})


export const { setPizzaArray } = pizzaSlice.actions

export default pizzaSlice.reducer