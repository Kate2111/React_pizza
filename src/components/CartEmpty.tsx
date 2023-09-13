import cartEmpty from '../assets/empty-cart.png'

const CartEmpty: React.FC = () => {
    return (
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Корзина пустая <p>😕</p></h2>
                    <p>
                        Вероятней всего, вы не заказывали ещё пиццу.
                        <br />
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                    <img src={cartEmpty} alt="Empty cart" />
                    <a href="/" className="button button--black">
                        <span>Вернуться назад</span>
                    </a>
                </div>
            </div>
    );
};

export default CartEmpty;