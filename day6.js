// function createCounter() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// const counter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


//exercise 1
// Output: Frontend;
// Alasannya: karena variabel name yang berada paling deekat adalah const name = "Frontend" yang berada pada parentnya

//exercise 2
// langkah paling awal, variabel company dicari pada funtion scopenya, karena tidak ada, maka akan dicari ke parent scopenya, di parent scope tidak ditemukan, lalu dilanjutkan pencarian di global scope. 
// variabel role dicari di function scopenya, karena tidak ada, dicari lagi pada parent scope, dan ditemukan variabel tersebut.

//exercise 3
const createCounter = function() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

//exercise 4
const createDiscountCalculator = (discount) => {
    return function(price) {
        return price - (price * discount);
    }
}

const tenPercent = createDiscountCalculator(0.1);
const twentyPercent = createDiscountCalculator(0.2);

console.log(tenPercent(500000));
console.log(twentyPercent(500000));

//exercise 5
const product = {
    id: 1,
    name: "Keyboard",
    price: 500000,
    stock: 10
};

const updateProduct = (product, newPrice, newStock) => {
    return {
        ...product,
        price: newPrice,
        stock: newStock
    }
};

const updatedProduct = updateProduct(product, 550000, 8);
console.log(updatedProduct);
console.log(product);


//exercise 6
const calculateTax = price => price * 1.11;
const calculateShipping = price => price + 25000;

const calculateFinalPrice = (price) => {
    const priceWithTax = calculateTax(price);
    return calculateShipping(priceWithTax);
}

console.log(calculateFinalPrice(500000));