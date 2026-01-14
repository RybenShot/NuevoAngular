export interface Product {
    description: string;
    price:number;
}

const phone: Product = {
    description: "Nokia viejo",
    price: 200.0
}

const tablet: Product ={
    description: "Ipad pocho",
    price: 200.4
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}



// function taxCalculator(options: TaxCalculationOptions): number[] {
export function taxCalculator(options: TaxCalculationOptions): number[] {
    // al hacer una destructuracion en este punto, luego  no tendré que destructurar a la hora de solicitar algun dato de "options"
    const {tax, products} = options
    let total = 0;

    products.forEach( ({price}) => {
    // options.products.forEach(product => {
        // total += product.price
        total += price
    });

    return [total, total * tax]

}

const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15

// con destructuring
const [totalProduct, taxCalculated] = taxCalculator({
    products: shoppingCart,
    tax: tax
})

console.log('Total', totalProduct)
console.log('Tax', taxCalculated)

// Sin destructuring
// const result = taxCalculator({
//     products: shoppingCart,
//     tax: tax
// })
// console.log('Total', result[0])
// console.log('Tax', result[1])
