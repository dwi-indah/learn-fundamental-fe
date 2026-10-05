//array

//exercise 1
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

fruits[1] = "Mango";
console.log(fruits[1]);

const newFruits = fruits.push("Watermelon");
console.log(fruits);

fruits.pop();
console.log(fruits);

for (const fruit of fruits) {
    console.log(fruit);
}

//exercise 2
const products = [
    {
        name: "Keyboard",
        price: 500000
    },
    {
        name: "Mouse",
        price: 250000
    },
    {
        name: "Monitor",
        price: 2000000
    }
];

console.log(products[0].name);
console.log(products[products.length - 1].price);

for (const product of products) {
    console.log(`Product Name: ${product.name}`)
    console.log(`${product.name} - Rp${product.price}`);
}

const fruits2 = ["Apple", "Banana"];

const result = fruits2.push("Orange");

console.log(result);
console.log(fruits2);