import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';



const CartFooter = () => {
    const { pizzaCount, totalPrice } = useSelector((state: RootState) => state.cart)

    return (
        <div className="cart__bottom">
            <div className="cart__bottom-details">
                <span> Всего пицц: <b>{ pizzaCount }шт.</b> </span>
                <span> Сумма заказа: <b>{ totalPrice } ₽</b> </span>
            </div>
        
            <div className="cart__bottom-buttons">
                <a href="/" className="button button--outline button--add go-back-btn">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <span>Вернуться назад</span>
                </a>
                <div className="button pay-btn">
                    <span>Оплатить сейчас</span>
                </div>
            </div>
        </div>
    );
};

export default CartFooter;