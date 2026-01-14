import {taxCalculator, type Product } from "./06-function-destructuring";

const shoppingCard: Product[] = [
    { 
        description: "Nokia",
        price: 23
    },
    { 
        description: "Apple",
        price: 233
    }
];

const [ total, tax ] = taxCalculator({
    products: shoppingCard,
    tax: 0.15
})

console.log("total", total)
console.log("tax", tax)



export {}