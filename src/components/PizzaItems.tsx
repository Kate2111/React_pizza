import MyLoader from '@/components/UI/MyLoader/MyLoader'
import PizzaBlock from '@/components/PizzaBlock'
import type { RootState } from '@/store/store' 
import { useSelector } from 'react-redux'

interface PizzaItemsProps {
    currentItems: PizzaType[]
}

interface PizzaType {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number[][];
    category: number;
    rating: number;
}

const PizzaItems = ({currentItems}: PizzaItemsProps) => {
    const isLoading = useSelector((state: RootState) => state.pizzas.loading)
    
    return (
        <>
            <div className="content__items">
                { isLoading === 'pending' && ([...new Array(4)].map((_, index) => <MyLoader key={index}/>)) }
                { isLoading === 'succeeded' &&  (currentItems.map(item => <PizzaBlock
                                                    key={item.id}
                                                    pizza={item}
                                                />))
                }
                { isLoading === 'failed' && (<div>ERROR</div>) }
            </div>
        </>
        
    );
};

export default PizzaItems;