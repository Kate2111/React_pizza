import React, { useCallback, useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { addItemCart } from "@/store/slice/cartSlice";
import { RootState } from "@/store/store";

interface PizzaBlockProps {
    key: number;
    pizza: PizzaType,
}

interface PizzaType {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number[][];
    category: number;
    rating: number;
}


const PizzaBlock: React.FC<PizzaBlockProps> = ({pizza}) => {
    const dispatch = useDispatch();
    const { cartArray } = useSelector((state: RootState) => state.cart)
    const { pizzaSizeNumber, pizzaTypeName} = useSelector((state: RootState) => state.pizzas)
    const [activeSize, setActiveSize] = useState(0);
    const [activeType, setActiveType] = useState(0);
    const nameActiveType = pizzaTypeName[activeType];
    const numberActiveSize = pizzaSizeNumber[activeSize];

    const pizzaId = pizza.id + nameActiveType + numberActiveSize;
    const cartItem = cartArray.find(item => item.id === pizzaId)

    const initialPizzaPrice = useCallback(() => {
        return pizza.price[activeType][activeSize];
    }, [activeType, activeSize])

    const actualPrice = initialPizzaPrice();

    const addItemCartHandler = () => {
        const item = {
            id: pizzaId,
            imageUrl: pizza.imageUrl,
            title: pizza.title,
            type: nameActiveType,
            size: numberActiveSize,
            price: actualPrice,
        }

        dispatch(addItemCart(item));
    }
    
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={pizza.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{pizza.title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        pizza.types.map(typeId => {
                            return  <li 
                                        key={typeId}
                                        className={activeType === typeId ? 'active' : ''}
                                        onClick={() => setActiveType(typeId)}
                                    >
                                        {pizzaTypeName[typeId]}
                                    </li>
                        })
                    }
                </ul>
                <ul>
                    {
                        pizza.sizes.map((size, index) => {
                            return  <li 
                                        key={index}
                                        className={activeSize === index ? 'active' : ''}
                                        onClick={() => setActiveSize(index)}
                                    >
                                        {size}
                                    </li>
                        })
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{cartItem ? cartItem.totalPriceItem : actualPrice} ₽</div>
                <MyButton onClick={addItemCartHandler}>{cartItem ? cartItem.count : ''}</MyButton>
            </div>
        </div>
       
        
    );
};

export default PizzaBlock;