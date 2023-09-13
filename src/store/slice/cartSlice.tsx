import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { TCartItem } from '@/types/types';

interface CartState {
  cartArray: TCartItem[],
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
            findItem.totalPriceItem = findItem.count * findItem.price;
        } else{
            state.cartArray.push({...action.payload, count: 1, totalPriceItem: action.payload.price});
        }

        state.totalPrice = state.cartArray.reduce((sum, item) => {
            return sum + item.totalPriceItem;
        }, 0)

        state.pizzaCount = state.cartArray.reduce((sum, item) => {
            return sum + item.count;
        }, 0)
    },

    minusItem: (state, action) => {
        const findItem = state.cartArray.find((item) => item.id === action.payload.id)

        if(findItem) {
            findItem.count--;
            findItem.totalPriceItem = findItem.totalPriceItem - findItem.price;
            state.pizzaCount--;
            state.totalPrice = state.totalPrice - action.payload.price
        } 
        
        if(findItem.count === 0) {
            state.cartArray = state.cartArray.filter(item => item.id !== action.payload.id)
        }
    },

    removeItemCart: (state, action) => {
        state.cartArray = state.cartArray.filter(item => item.id !== action.payload.id)
        state.pizzaCount = state.pizzaCount - action.payload.count
        state.totalPrice = state.totalPrice - action.payload.totalPriceItem
    },

    clearItemsCart: (state) => {
        state.cartArray = [];
        state.pizzaCount = 0;
        state.totalPrice = 0;
    },

   
  },
})

export const cartState = (state: RootState) => state.cart
export const {  addItemCart, minusItem, removeItemCart, clearItemsCart } = cartSlice.actions

export default cartSlice.reducer