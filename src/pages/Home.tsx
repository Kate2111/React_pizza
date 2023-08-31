import Categories from '@/components/Categories'
import Sort from '@/components/Sort'
import PizzaBlock from '@/components/PizzaBlock'
import { useState } from 'react'
import { useFetching } from '@/hooks/useFetching'
import { useFilterArray } from '@/hooks/useFilterArray'
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
    const [pizzaArray, setPizzaArray] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useFetching({setPizzaArray, setIsLoading})

    const [selectedSort, setSelectedSort] = useState('')
    const [activeIndex, setActiveIndex] = useState(0)

    const filteredPizzaArray = useFilterArray(pizzaArray, selectedSort, activeIndex)

    return (
        <>
        <div className="container">
            <div className="content__top">
                <Categories 
                    activeIndex={activeIndex}
                    onFilter={setActiveIndex}
                />
                <Sort
                    value={selectedSort}
                    onChange={setSelectedSort}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                    ?
                    ([...new Array(6)].map((_, index) => <MyLoader key={index}/>))
                    :
                    (filteredPizzaArray.map((item: PizzaType) => <PizzaBlock
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