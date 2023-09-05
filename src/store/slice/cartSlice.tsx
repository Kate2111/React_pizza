import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  cartArray: any[],
  pizzaCount: number,
  totalPrice: number,
}

const initialState: CartState = {
  cartArray: [],
  pizzaCount: 0,
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action) => {
        const findItem = state.cartArray.find((item) => item.id === action.payload.id)

        if(findItem) {
            findItem.count++;
        } else{
            state.cartArray.push({...action.payload, count: 1});
        }

        state.totalPrice = state.cartArray.reduce((sum, item) => {
            return sum + (item.price * item.count);
        }, 0)

        state.pizzaCount = state.cartArray.reduce((sum, item) => {
            return sum + item.count;
        }, 0)
    },

    removeItemCart: (state, action) => {
        state.cartArray.filter(item => {
            item.id !== action.payload
        })
    },

    clearItemsCart: (state) => {
        state.cartArray = []
    },

   
  },
})


export const {  addItemCart } = cartSlice.actions

export default cartSlice.reducer