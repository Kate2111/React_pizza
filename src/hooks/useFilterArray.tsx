import { useMemo } from 'react'

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

export const useSortedArray = (array: PizzaType[], sort: string) => {
    const sortedPizza = useMemo(() => {
        let sortedArray = [...array];
        
        sort === 'price up' && sortedArray == sortedArray.sort((a, b) => a.price - b.price);
        sort === ('price' || 'rating') && sortedArray == sortedArray.sort((a, b) => b[sort] - a[sort]);
        sort === 'title' && sortedArray == sortedArray.sort((a, b) => a[sort].localeCompare(b[sort]));

        return sortedArray;
    }, [sort, array]);

    return sortedPizza
}

export const useFilterArray = (array: PizzaType[], sort: string, index: number) => {
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

export const useSearchResult = (array: PizzaType[], sort: string, index: number,searchValue: string) => {
    const filteredPizza = useFilterArray(array, sort, index);
    const searchPizzaArray = useMemo( () => {
        return filteredPizza.filter( item => item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
    }
    , [searchValue, filteredPizza]);

      
    return searchPizzaArray
}