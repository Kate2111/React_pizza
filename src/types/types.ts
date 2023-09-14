export type TPizzaItem = {
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
    id: string,
    imageUrl: string,
    title: string,
    type: string,
    size: number,
    price: number,
    count: number,
    totalPriceItem: number
}