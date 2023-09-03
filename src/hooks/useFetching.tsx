import { getDataList } from '@/API/firebase'
import { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { setPizzaArray } from '@/store/slice/pizzaSlice' 
import { setIsLoading } from '@/store/slice/loadingSlice'


export const useFetching = () => {
    const dispatch = useDispatch()

    const fetchingPizza = async () => {
        const response = await getDataList('pizza')
        dispatch(setPizzaArray(response))
        dispatch(setIsLoading(false))
    }

    useEffect(() => {
        dispatch(setIsLoading(true))
        fetchingPizza();
        window.scrollTo(0, 0)
    }, [])

}