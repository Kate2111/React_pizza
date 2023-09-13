import { useDispatch } from 'react-redux'
import { clearItemsCart } from '@/store/slice/cartSlice'
import { ReactComponent as Cart} from '@/assets/cart.svg'
import { ReactComponent as CartRemove } from '@/assets/cartRemove.svg'

const CartHeader: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <div className="cart__top">
            <h2 className="content__title">
                <Cart/>
                Корзина
            </h2>
            <div className="cart__clear" onClick={() => {dispatch(clearItemsCart())}}>
                <CartRemove/>
                <span>Очистить корзину</span>
            </div>
        </div>
    );
};

export default CartHeader;