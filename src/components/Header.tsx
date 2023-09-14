import logo from '../assets/pizza-logo.svg'
import {Link, useLocation} from 'react-router-dom'
import MySeacrh from './UI/MySearch'
import { useSelector } from 'react-redux';
import { cartState } from '@/store/slice/cartSlice';
import { ReactComponent as Cart } from '@/assets/cart.svg'


const Header: React.FC = () => {
    const { pizzaCount, totalPrice } = useSelector(cartState)
    const location = useLocation();

    return (
        <>
            <div className="header">
                <div className="container">
                    <Link to='/React_pizza' className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </Link>
                    
                    { location.pathname !== '/React_pizza/cart' &&  <MySeacrh/>}
                   
                    <div className="header__cart">
                        <Link to="/React_pizza/cart" className="button button--cart">
                            <span>{totalPrice} ₽</span>
                            <div className="button__delimiter"></div>
                            <Cart/><span>{pizzaCount}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;