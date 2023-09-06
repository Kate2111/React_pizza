import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import CartItems from '@/components/CartItems';
import CartEmpty from '@/components/CartEmpty';


const Cart = () => {
    const { cartArray } = useSelector((state: RootState) => state.cart)

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