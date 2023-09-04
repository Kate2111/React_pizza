import { setSelectedSort } from "@/store/slice/filterSlice";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";


const Sort = () => {
    const sortValue = useSelector((state: RootState) => state.filter.selectedSort)
    const dispatch = useDispatch()

    return (
      <>
        <div className="sort">
          <div className="sort__label">
            <b>Сортировка по:</b>
            <select 
                className="sort__popup"
                value={sortValue}
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
};

export default Sort;