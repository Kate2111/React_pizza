import { TCartItem } from "@/types/types";

export const cartTotalPrice = (items: TCartItem[]) => {
    return items.reduce((sum, item) => {
        return sum + item.totalPriceItem;
    }, 0)
}