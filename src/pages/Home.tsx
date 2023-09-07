import Categories from '@/components/Categories'
import Sort from '@/components/Sort'
import type { RootState } from '@/store/store' 
import { useSelector } from 'react-redux'
import { useSearchResult } from '@/hooks/useFilterArray'
import PaginatedItems from '@/components/PaginatedItems'



const Home = () => {
    const { pizzaArray } = useSelector((state: RootState) => state.pizzas)
    const { selectedSort, activeCategoryIndex, searchValue } = useSelector( (state: RootState) => state.filter)

    const filteredPizzaArray = useSearchResult(pizzaArray, selectedSort, activeCategoryIndex, searchValue)

    return (
        <>
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
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

