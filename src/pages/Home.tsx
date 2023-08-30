import Categories from '@/components/Categories'
import Sort from '@/components/Sort'
import PizzaBlock from '@/components/PizzaBlock'
import { getDataList } from '@/API/firebase'
import { useEffect, useState } from 'react'
import MyLoader from '@/components/UI/MyLoader/MyLoader'

interface PizzaType {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

const Home = () => {
    const [pizzaArray, setPizzaArray] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    console.log(isLoading);

    const fetchingPizza = async () => {
        const response = await getDataList('pizza')
        setPizzaArray(response)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchingPizza();
        window.scrollTo(0, 0)
    }, [])

  
    return (
        <>
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                    ?
                    ([...new Array(6)].map((_, index) => <MyLoader key={index}/>))
                    :
                    (pizzaArray.map((item: PizzaType) => <PizzaBlock
                                                        key={item.id}
                                                        pizza={item}
                                                        />)
                    )
                }
            </div>
        </div>
        </>
    );
};

export default Home;