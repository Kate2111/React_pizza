import Categories from '@/components/Categories'
import Sort from '@/components/Sort'
import type { RootState } from '@/store/store' 
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useFetching } from '@/hooks/useFetching'
import { useFilterArray } from '@/hooks/useFilterArray'
import PaginatedItems from '@/components/PaginatedItems'



const Home = () => {
    const pizzaArray = useSelector((state: RootState) => state.pizzas.pizzaArray)

    useFetching()

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
            <PaginatedItems
                itemsPerPage={4} 
                filteredPizzaArray={filteredPizzaArray}
            />
            
        </div>
        </>
    );
};

export default Home;

