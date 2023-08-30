import { useState } from "react";


const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <>
            <div className="categories">
                <ul>
                    {categories.map((category, index) => {
                        return <li 
                                    key={index}
                                    className={activeIndex === index ? 'active' : ''}
                                    onClick={() => setActiveIndex(index)}
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