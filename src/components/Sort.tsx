import React from "react";
import { filterState, setSelectedSort } from "@/store/slice/filterSlice";
import { useDispatch, useSelector } from "react-redux";


const Sort: React.FC = React.memo(() => {
    const { selectedSort } = useSelector(filterState)
    const dispatch = useDispatch()

    return (
      <>
        <div className="sort">
          <div className="sort__label">
            <b>Сортировка по:</b>
            <select 
                className="sort__popup"
                value={selectedSort}
                onChange={event => dispatch(setSelectedSort(event.target.value))}
            >
              <option value="rating" className="active">популярности</option>
              <option value="price up">цене ↑ </option> 
              <option value="price">цене ↓ </option>
              <option value="title">алфавиту</option>
            </select>
          </div>
        </div>
      </>
      
        
    );
});

export default Sort;