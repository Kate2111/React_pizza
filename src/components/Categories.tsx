import { filterState, setActiveCategoryIndex } from "@/store/slice/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Categories: React.FC = () => {
    const {activeCategoryIndex , categories} = useSelector(filterState)
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