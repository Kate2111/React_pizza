import { cartTotalPrice } from "./cartTotalPrice";

test('get total count all items', () => {
    expect(cartTotalPrice([
        {
            id:"1тонкое26",
            imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
            title:"Сырная",
            type:"тонкое",
            size:26,
            price:250,
            count:2,
            totalPriceItem:500,
        },
        {
            id:"2тонкое26",
            imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
            title:"Цыпленок барбекю",
            type:"тонкое",
            size:26,
            price:500,
            count:1,
            totalPriceItem:350,
        }])).toEqual(850)
});