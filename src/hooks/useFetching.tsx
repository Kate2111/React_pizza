import { getDataList } from '@/API/firebase'
import { useEffect } from 'react'

interface FetchingType {
    setPizzaArray: (array: any[]) => void,
    setIsLoading: (isLoading: boolean) => void,
}


export const useFetching = ({ setPizzaArray, setIsLoading }: FetchingType) => {
    const fetchingPizza = async () => {
        const response = await getDataList('pizza')
        setPizzaArray(response)
        setIsLoading(false)
    }

    useEffect(() => {
        setIsLoading(true)
        fetchingPizza();
        window.scrollTo(0, 0)
    }, [])

}