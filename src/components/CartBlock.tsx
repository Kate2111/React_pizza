import { addItemCart, removeItemCart } from "@/store/slice/cartSlice";
import { useDispatch } from "react-redux";
import { minusItem } from "@/store/slice/cartSlice";
import { TCartItem } from "@/types/types";
import MyButton from "./UI/MyButton/MyButton";
import { ReactComponent as CartMinus } from '@/assets/cartMinus.svg'
import { ReactComponent as CartPlus } from '@/assets/cartPlus.svg'
import { ReactComponent as CartClose } from '@/assets/cartClose.svg'


interface CartItemProps {
    cartItem: TCartItem
}

const CartBlock: React.FC<CartItemProps> = ({cartItem}) => {
    const dispatch = useDispatch();

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src={cartItem.imageUrl}
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>{cartItem.title}</h3>
                <p>{cartItem.type}, {cartItem.size} см.</p>
            </div>
            <div className="cart__item-count">
                <MyButton onClick={() => dispatch(minusItem(cartItem))} icon={<CartMinus/>} style={['button--circle', 'cart__item-count-minus']}/>
                <b>{cartItem.count}</b>
                <MyButton onClick={() => dispatch(addItemCart({...cartItem}))} icon={<CartPlus/>} style={['button--circle', 'cart__item-count-plus']}/>
            </div>
            <div className="cart__item-price">
                <b>{cartItem.totalPriceItem} ₽</b>
            </div>
            <div className="cart__item-remove">
                <MyButton onClick={() => {dispatch(removeItemCart(cartItem))}} icon={<CartClose/>} style={['button--circle']}/>
            </div>
        </div>
    );
};

export default CartBlock;