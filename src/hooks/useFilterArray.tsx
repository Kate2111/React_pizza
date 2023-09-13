import { TPizzaItem } from '@/types/types';
import { useMemo } from 'react'

export const useSortedArray = (array: TPizzaItem[], sort: string) => {
    const sortedPizza = useMemo(() => {
        let sortedArray = [...array];
        
        sort === 'rating' && sortedArray == sortedArray.sort((a, b) => b[sort] - a[sort]);
        sort === 'price up' && sortedArray == sortedArray.sort((a, b) => a.price[0][0] - b.price[0][0]);
        sort === 'price' && sortedArray == sortedArray.sort((a, b) => a.price[0][0] - b.price[0][0]);
        sort === 'title' && sortedArray == sortedArray.sort((a, b) => a[sort].localeCompare(b[sort]));

        return sortedArray;
    }, [sort, array]);

    return sortedPizza
}

export const useFilterArray = (array: TPizzaItem[], sort: string, index: number) => {
    const sortedPizza = useSortedArray(array, sort);
    const sortedAndFilterPizza = useMemo( () => {
        if(index === 0) {
            return sortedPizza
        } else {
            return sortedPizza.filter(item => item.category === index)
        }
    }, [index, sortedPizza]);

    return sortedAndFilterPizza
}

export const useSearchResult = (array: TPizzaItem[], sort: string, index: number,searchValue: string) => {
    const filteredPizza = useFilterArray(array, sort, index);
    const searchPizzaArray = useMemo( () => {
        return filteredPizza.filter( item => item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
    }
    , [searchValue, filteredPizza]);

      
    return searchPizzaArray
}