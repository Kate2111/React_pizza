import { TCartItem } from "@/types/types";

export const cartPizzaCount = (items: TCartItem[]) => {
    return items.reduce((sum, item) => {
        return sum + item.count;
    }, 0)
}