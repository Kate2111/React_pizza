import { useSelector } from 'react-redux';
import { cartState } from "@/store/slice/cartSlice";
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/MyButton/MyButton';
import { ReactComponent as GoBack } from '@/assets/btnGoBack.svg'

const CartFooter: React.FC = () => {
    const { pizzaCount, totalPrice } = useSelector(cartState)
    const navigate = useNavigate()
    

    return (
        <div className="cart__bottom">
            <div className="cart__bottom-details">
                <span> Всего пицц: <b>{ pizzaCount }шт.</b> </span>
                <span> Сумма заказа: <b>{ totalPrice } ₽</b> </span>
            </div>
        
            <div className="cart__bottom-buttons">
                <MyButton 
                    style={['button--add', 'go-back-btn']} 
                    icon={<GoBack/>} 
                    onClick={() => {navigate(-1)}}
                >
                    Вернуться назад
                </MyButton>
            
                <button className="button pay-btn">
                    <span>Оплатить сейчас</span>
                </button>
            </div>
        </div>
    );
};

export default CartFooter;