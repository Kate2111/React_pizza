import { useSelector } from 'react-redux';
import CartItems from '@/components/CartItems';
import CartEmpty from '@/components/CartEmpty';
import { cartState } from '@/store/slice/cartSlice';


const Cart = () => {
    const { cartArray } = useSelector(cartState)

    return (
            <>
                {
                    cartArray.length === 0
                    ? <CartEmpty/>
                    : <CartItems/>
                }
            </>
            
    );
};

export default Cart;