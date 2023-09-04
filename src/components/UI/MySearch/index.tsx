import style from './MySearch.module.scss'
import search from './search.svg'
import close from './close.svg'
import { useRef, RefObject } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '@/store/slice/filterSlice';

interface SearchType {
    searchValue: string,
    //setSearchValue: (value: string) => void
}

const MySeacrh = ({searchValue}: SearchType) => {
    const dispatch = useDispatch()
    const inputRef: RefObject<HTMLInputElement> = useRef(null);

    const searchHandler = () => {
        dispatch(setSearchValue(''))
        inputRef.current?.focus()
    }

    return (
        <div className={style.root}>
            <img 
                className={style.icon} 
                src={search} 
                alt="search" 
            />

            <input 
                ref={inputRef}
                className={style.input} 
                placeholder='Поиск пиццы...'
                value={searchValue}
                onChange={event =>  dispatch(setSearchValue(event.target.value))}
            />

            <img 
                className={style.clearIcon} 
                src={close} 
                alt="close" 
                onClick={searchHandler}
            />
        </div>
        
    );
};

export default MySeacrh;