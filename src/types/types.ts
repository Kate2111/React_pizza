export interface IPizzaItem {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number[][];
    category: number;
    rating: number;
}

export type TCartItem = {
    key: number,
    id: number,
    imageUrl: string,
    title: string,
    type: string,
    size: number,
    count: number,
    totalPriceItem: number
}