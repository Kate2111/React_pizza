
import React, { useState } from 'react';
import PizzaItems from '@/components/PizzaItems';
import MyPagination from './UI/MyPagination';

interface MyPaginationnProps {
    itemsPerPage: number,
    filteredPizzaArray: PizzaType[],
}

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

const PaginatedItems: React.FC<MyPaginationnProps>  = ({itemsPerPage, filteredPizzaArray}) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredPizzaArray.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredPizzaArray.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % filteredPizzaArray.length;
        setItemOffset(newOffset);
    };



    return (
        <>
            <MyPagination
                onClick={handlePageClick}
                pageCount={pageCount}
            />

            <PizzaItems 
                currentItems={currentItems}
            />
        </>
        
    );
};

export default PaginatedItems;