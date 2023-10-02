import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { TCartItem } from '@/types/types';
import { cartTotalPrice } from '@/utils/price/cartTotalPrice';
import { cartPizzaCount } from '@/utils/count/cartPizzaCount';
import { getCartItemsFromLS } from '@/utils/localStorage/getCartItemsFromLS';

interface CartState {
  cartArray: TCartItem[],
  pizzaCount: number,
  totalPrice: number,
}

const { cartArray, pizzaCount, totalPrice } = getCartItemsFromLS();

const initialState: CartState = {
  cartArray,
  pizzaCount,
  totalPrice,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<TCartItem>) => {
        const findItem = state.cartArray.find((item) => item.id === action.payload.id)

        if(findItem) {
            findItem.count++;
            findItem.totalPriceItem = findItem.count * findItem.price;
        } else{
            state.cartArray.push({...action.payload, count: 1, totalPriceItem: action.payload.price});
        }

        state.totalPrice = cartTotalPrice(state.cartArray)

        state.pizzaCount = cartPizzaCount(state.cartArray)
    },

    minusItem: (state, action: PayloadAction<TCartItem>) => {
        const findItem = state.cartArray.find((item) => item.id === action.payload.id)

        if(findItem) {
            findItem.count--;
            findItem.totalPriceItem = findItem.totalPriceItem - findItem.price;
            state.pizzaCount--;
            state.totalPrice = state.totalPrice - action.payload.price
        } 
        
        if(findItem?.count === 0) {
            state.cartArray = state.cartArray.filter(item => item.id !== action.payload.id)
        }
    },

    removeItemCart: (state, action: PayloadAction<TCartItem>) => {
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
//export const cartItemState = (pizzaId: string) => (state:RootState) => state.cart.cartArray.find(item => item.id === pizzaId)
export const {  addItemCart, minusItem, removeItemCart, clearItemsCart } = cartSlice.actions

export default cartSlice.reducer