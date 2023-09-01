import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import style from './MyPagination.module.scss'


interface MyPaginationProps extends ReactPaginateProps{
    pageCount: number
}

const MyPagination = ({onClick, pageCount}:MyPaginationProps) => {
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