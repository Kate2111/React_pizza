import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import style from './MyPagination.module.scss'
import React from 'react';


const MyPagination: React.FC<ReactPaginateProps> = ({onClick, pageCount}) => {
    return (
        <ReactPaginate
            className={style.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={onClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
};

export default MyPagination;