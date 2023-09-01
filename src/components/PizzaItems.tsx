import MyLoader from '@/components/UI/MyLoader/MyLoader'
import PizzaBlock from '@/components/PizzaBlock'

interface PizzaItemsProps {
    isLoading: boolean,
    currentItems: PizzaType[]
}

interface PizzaType {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

const PizzaItems = ({isLoading, currentItems}: PizzaItemsProps) => {
    
    return (
        <>
            <div className="content__items">
                {
                    isLoading
                    ?
                    ([...new Array(4)].map((_, index) => <MyLoader key={index}/>))
                    :
                    (
                        currentItems.map((item: PizzaType) => <PizzaBlock
                                                                    key={item.id}
                                                                    pizza={item}
                                                                />)
                        
                    )
                }
            </div>
        </>
        
    );
};

export default PizzaItems;