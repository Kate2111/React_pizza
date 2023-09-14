import { filterState, setActiveCategoryIndex } from "@/store/slice/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";

const Categories: React.FC = React.memo(() => {
    const {activeCategoryIndex , categories} = useSelector(filterState)
    const dispatch = useDispatch()
    const getActiveCategoryHandler = useCallback((index: number) => {
        dispatch(setActiveCategoryIndex(index))
    }, [])

    return (
        <>
            <div className="categories">
                <ul>
                    {categories.map((category: string, index: number) => {
                        return <li 
                                    key={index}
                                    className={activeCategoryIndex === index ? 'active' : ''}
                                    onClick={() => getActiveCategoryHandler(index)}
                                >
                                    {category}
                                </li>
                    })}
                </ul>
            </div>
        </>
    );
});

export default Categories;