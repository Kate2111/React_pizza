import MyLoader from '@/components/UI/MyLoader/MyLoader'
import PizzaBlock from '@/components/PizzaBlock'
import { useSelector } from 'react-redux'
import { TPizzaItem } from '@/types/types'
import { pizzaState } from '@/store/slice/pizzaSlice'

interface PizzaItemsProps {
    currentItems: TPizzaItem[]
}

const PizzaItems: React.FC<PizzaItemsProps> = ({currentItems}) => {
    const { loading } = useSelector(pizzaState)
    
    return (
        <>
            <div className="content__items">
                { loading === 'pending' && ([...new Array(4)].map((_, index: number) => <MyLoader key={index}/>)) }
                { loading === 'succeeded' &&  (currentItems.map(item => <PizzaBlock
                                                    key={item.id}
                                                    pizza={item}
                                                />))
                }
                { loading === 'failed' && (<div>ERROR</div>) }
            </div>
        </>
        
    );
};

export default PizzaItems;