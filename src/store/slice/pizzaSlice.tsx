import { createSlice } from '@reduxjs/toolkit'


export interface PizzaState {
  pizzaArray: any[],
  pizzaSize: number,
  pizzaType: number,
  pizzaTypeName: string[],
  pizzaPrice: number,
}

const initialState: PizzaState = {
  pizzaArray: [],
  pizzaSize: 0,
  pizzaType: 0,
  pizzaTypeName: ['тонкое', 'традиционное'],
  pizzaPrice: 0
}

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzaArray: (state, action) => {
        state.pizzaArray = action.payload;
    },

    setPizzaSize: (state, action) => {
        state.pizzaSize = action.payload
    },

    setPizzaType: (state, action) => {
        state.pizzaType = action.payload
    },

    setPizzaPrice: (state, action) => {
        state.pizzaPrice = action.payload
    },
  },
})


export const { setPizzaArray } = pizzaSlice.actions

export default pizzaSlice.reducer