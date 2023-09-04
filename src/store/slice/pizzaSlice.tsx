import { createSlice } from '@reduxjs/toolkit'


export interface PizzaState {
  pizzaArray: any[],
  pizzaCount: number,
}

const initialState: PizzaState = {
  pizzaArray: [],
  pizzaCount: 0
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