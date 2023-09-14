import Categories from '@/components/Categories'
import Sort from '@/components/Sort'
import { useSelector } from 'react-redux'
import { useSearchResult } from '@/hooks/useFilterArray'
import PaginatedItems from '@/components/PaginatedItems'
import { pizzaState } from '@/store/slice/pizzaSlice'
import { filterState } from '@/store/slice/filterSlice'

const Home = () => {
    const { pizzaArray } = useSelector(pizzaState)
    const { selectedSort, activeCategoryIndex, searchValue } = useSelector(filterState)

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

