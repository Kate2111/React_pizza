import React from "react";
interface SortProps {
  value: string,
  onChange: (sort: string) => void
}


const Sort: React.FC<SortProps> = ({value, onChange}) => {

    return (
      <>
        <div className="sort">
          <div className="sort__label">
            <b>Сортировка по:</b>
            <select 
                className="sort__popup"
                value={value}
                onChange={event => onChange(event.target.value)}
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