import { useEffect } from 'react'
import { fetchPizza } from '@/store/slice/pizzaSlice'
import { useAppDispatch } from '@/store/store'

export const useFetching = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPizza('pizza'));
        window.scrollTo(0, 0)
    }, [])

}
