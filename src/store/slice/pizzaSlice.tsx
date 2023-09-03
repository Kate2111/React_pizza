import { createSlice } from '@reduxjs/toolkit'


export interface PizzaState {
  pizzaArray: any[]
}

const initialState: PizzaState = {
  pizzaArray: [],
}

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzaArray: (state, action) => {
        state.pizzaArray = action.payload;
    }
  },
})


export const { setPizzaArray } = pizzaSlice.actions

export default pizzaSlice.reducer