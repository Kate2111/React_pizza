import { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { fetchPizza } from '@/store/slice/pizzaSlice'
import { AppDispatch } from '@/store/store'

export const useFetching = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchPizza());
        window.scrollTo(0, 0)
    }, [])

}
