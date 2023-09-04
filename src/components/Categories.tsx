import { setActiveCategoryIndex } from "@/store/slice/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";

const Categories = () => {
    const {activeCategoryIndex , categories} = useSelector((state: RootState) => state.filter)
    const dispatch = useDispatch()

    return (
        <>
            <div className="categories">
                <ul>
                    {categories.map((category: string, index: number) => {
                        return <li 
                                    key={index}
                                    className={activeCategoryIndex === index ? 'active' : ''}
                                    onClick={() => dispatch(setActiveCategoryIndex(index))}
                                >
                                    {category}
                                </li>
                    })}
                </ul>
            </div>
        </>
    );
};

export default Categories;