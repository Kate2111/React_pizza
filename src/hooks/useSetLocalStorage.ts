import { TCartItem, TPizzaItem } from "@/types/types"
import { useEffect, useRef } from "react"

type TItemArray = TCartItem[] | TPizzaItem[]

export const useSeLocalStorage = (items: TItemArray, store: string) => {
    const isMounted = useRef(false);

    useEffect(() => {
        if(isMounted) {
            const json = JSON.stringify(items)
            localStorage.setItem(store, json)
        }
      
        isMounted.current = true
    }, [items])
}
