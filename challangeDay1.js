//challange 1 - function
const calculateTotal = (price, tax) => {
    return `harga: ${price}, pajak: ${tax}, total setelah pajak: ${price + (price * tax)}`
}

console.log(calculateTotal(100, 0.1));


//challange 2 - ternary
const isLoggedIn = true;

const message = isLoggedIn ? "User is logged in" : "User is not logged in";

console.log(message);

//challange 3 - rest + spread
// const sumAllNumbers = (...numbers) => {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sumAllNumbers(1, 2, 3));
// console.log(sumAllNumbers(10, 20, 30, 40));
// console.log(sumAllNumbers(5, 10, 15, 20, 25));

const numbers = [10, 20, 30, 40];


const sumAllNumbers = (...numbers) => {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }
    
    return result;
}

console.log(sumAllNumbers(...numbers));
