import style from './MySearch.module.scss'
import search from './search.svg'
import close from './close.svg'
import { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '@/store/slice/filterSlice';
import debounce from 'lodash.debounce'

const MySeacrh: React.FC = () => {
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string>('')

    const updateValueSearch = useCallback(
        debounce((str: string)=>{
            dispatch(setSearchValue(str))
        }, 1000),
        []
    )

    const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateValueSearch(event.target.value)
    }

    const removeSearchHandler = () => {
        setValue('');
        dispatch(setSearchValue(''));
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
                value={value}
                onChange={event =>  changeValueHandler(event)}
            />

            <img 
                className={style.clearIcon} 
                src={close} 
                alt="close" 
                onClick={removeSearchHandler}
            />
        </div>
        
    );
};

export default MySeacrh;