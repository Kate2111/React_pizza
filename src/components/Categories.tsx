import React from "react";

interface CategoriesProps {
    activeIndex: Number,
    onFilter: (index: number) => void
}

const Categories: React.FC<CategoriesProps> = ({activeIndex, onFilter}) => {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    

    return (
        <>
            <div className="categories">
                <ul>
                    {categories.map((category: string, index: number) => {
                        return <li 
                                    key={index}
                                    className={activeIndex === index ? 'active' : ''}
                                    onClick={() => onFilter(index)}
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