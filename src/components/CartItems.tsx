import { useSelector } from 'react-redux';
import CartBlock from '@/components/CartBlock';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import { cartState } from '@/store/slice/cartSlice';


const CartItems: React.FC = () => {
    const { cartArray } = useSelector(cartState)

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