import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import CartBlock from '@/components/CartBlock';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';

const CartItems = () => {
    const { cartArray } = useSelector((state: RootState) => state.cart)

    return (
        <div className="content">
                <div className="container container--cart">
                    <div className="cart">
                        <CartHeader/>

                        <div className="content__items-cart">
                            {
                                cartArray.map(cartItem=> {
                                    return  <CartBlock
                                                key={cartItem.id}
                                                cartItem = {cartItem}
                                            />
                                })
                            }
                            
                            <CartFooter/> 
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CartItems;