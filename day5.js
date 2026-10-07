function calculateDiscount(price, discount) {
    return price - (price * discount);
};
console.log(calculateDiscount(500000, 0.1));

const calculateTax = function(price, tax) {
    const taxAmount = price * tax;
    let total = price + taxAmount;
    return total;
}
console.log(calculateTax(500000, 0.11));

const isAdult = (age) => {
    return age >= 18;
}
console.log(isAdult(25));
console.log(isAdult(15)); 

const double = number => number * 2;
const square = number => number * number;

const processNumber = (number, callback) => {
    const result = callback(number);

    return result;
};
console.log(processNumber(10, double));
console.log(processNumber(10, square));

const createMultiplier = (multiplier) => {
    return function(number) {
        return number * multiplier;
    }
};

const double1 = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double1(10));
console.log(triple(10));

const calculateTotal = (price, quantity) => {
    const total = price * quantity;
    return total;
}

console.log(calculateTotal(500000, 2));

const products = [
    { name: "Keyboard", price: 500000 },
    { name: "Mouse", price: 250000 },
    { name: "Monitor", price: 2000000 }
];

const processProducts = (products, callback) => {
    return callback(products);
}

const getProductName = function(products) {
    return products.map(product => product.name);
}
console.log(processProducts(products, getProductName))

const getProductPrice = function(products) {
    return products.map(product => product.price);
}
console.log(processProducts(products, getProductPrice));


const getProductLabel = function(products) {
    return products.map(product => `${product.name} - Rp${product.price}`);
}
console.log(processProducts(products, getProductLabel));