
import React, { useState } from 'react';
import PizzaItems from '@/components/PizzaItems';
import MyPagination from './UI/MyPagination';
import { TPizzaItem } from '@/types/types';

interface PaginationnProps {
    itemsPerPage: number,
    filteredPizzaArray: TPizzaItem[],
}

const PaginatedItems: React.FC<PaginationnProps>  = ({itemsPerPage, filteredPizzaArray}) => {
    const [itemOffset, setItemOffset] = useState<number>(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredPizzaArray.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredPizzaArray.length / itemsPerPage);

    const handlePageClick = (selectedItem: { selected: number }) => {
        const newOffset = (selectedItem.selected * itemsPerPage) % filteredPizzaArray.length;
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