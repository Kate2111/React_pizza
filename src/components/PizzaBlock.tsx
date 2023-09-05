import { useCallback, useState, useEffect } from "react";
import MyButton from "./UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { addItemCart } from "@/store/slice/cartSlice";

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
    const [pizzaCount, setPizzaCount] = useState(0);
    const [activeSize, setActiveSize] = useState(0);
    const [activeType, setActiveType] = useState(0);
    const [newPrice, setNewPrice] = useState(0);
    
    const pizzaTypeName = ['тонкое', 'традиционное'];

    const dispatch = useDispatch();
   
    const initialPizzaPrice = useCallback(() => {
        return pizza.price[activeType][activeSize];
    }, [activeType, activeSize])

    const actualPrice = initialPizzaPrice();

    useEffect(() => {
        pizzaCount ? setNewPrice(actualPrice * pizzaCount) : setNewPrice(actualPrice);
        
      }, [activeType, activeSize, actualPrice]);


    const addItemCartHandler = () => {
        const item = {
            id: pizza.id,
            imageUrl: pizza.imageUrl,
            title: pizza.title,
            type: pizzaTypeName[activeType],
            size: activeSize,
            price: actualPrice,
        }

        dispatch(addItemCart(item));

        setPizzaCount(prev => prev + 1)

        setNewPrice(actualPrice * (pizzaCount + 1))
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
                <div className="pizza-block__price">{newPrice} ₽</div>
                <MyButton onClick={addItemCartHandler}>{pizzaCount}</MyButton>
            </div>
        </div>
       
        
    );
};

export default PizzaBlock;