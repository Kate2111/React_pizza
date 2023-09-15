import React, { useCallback, useState } from "react";
import MyButtonAdd from "./UI/MyButton/MyButtonAdd";
import { useDispatch, useSelector } from "react-redux";
import { addItemCart, cartState } from "@/store/slice/cartSlice";
import { TCartItem, TPizzaItem } from "@/types/types";
import { pizzaState } from "@/store/slice/pizzaSlice";
import { useSeLocalStorage } from "@/hooks/useSetLocalStorage";

interface PizzaBlockProps {
    key: number;
    pizza: TPizzaItem,
}

const PizzaBlock: React.FC<PizzaBlockProps> = ({pizza}) => {
    const dispatch = useDispatch();
    const { cartArray } = useSelector(cartState)
    const { pizzaSizeNumber, pizzaTypeName} = useSelector(pizzaState)
    const [activeSize, setActiveSize] = useState<number>(0);
    const [activeType, setActiveType] = useState<number>(0);
    const nameActiveType = pizzaTypeName[activeType];
    const numberActiveSize = pizzaSizeNumber[activeSize];

    const pizzaId = pizza.id + nameActiveType + numberActiveSize;
    const cartItem = cartArray.find(item => item.id === pizzaId)
  
    console.log(pizzaId, activeType, activeSize)

    const initialPizzaPrice = useCallback(() => {
        return pizza.price[activeType][activeSize];
    }, [activeType, activeSize])

    const actualPrice = initialPizzaPrice();

    const addItemCartHandler = () => {
        const item: TCartItem = {
            id: pizzaId,
            imageUrl: pizza.imageUrl,
            title: pizza.title,
            type: nameActiveType,
            size: numberActiveSize,
            price: actualPrice,
            count: 0,
            totalPriceItem: 0
        }

        dispatch(addItemCart(item));
    }

    useSeLocalStorage(cartArray, 'cart')
    
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
                                        {!cartItem ? size : cartItem.size}
                                    </li>
                        })
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{cartItem ? cartItem.totalPriceItem : actualPrice} ₽</div>
                <MyButtonAdd onClick={addItemCartHandler}>{cartItem ? cartItem.count : ''}</MyButtonAdd>
            </div>
        </div>
       
        
    );
};

export default PizzaBlock;