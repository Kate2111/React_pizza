import { cartPizzaCount } from "./cartPizzaCount";
import { cartTotalPrice } from "./cartTotalPrice";

export const getCartItemsFromLS = () => {
    const data = localStorage.getItem('cart');
    const cartArray =  data ? JSON.parse(data) : [];
    const pizzaCount = cartPizzaCount(cartArray);
    const totalPrice = cartTotalPrice(cartArray);
    
    return {
        cartArray,
        pizzaCount,
        totalPrice,
    }
} 