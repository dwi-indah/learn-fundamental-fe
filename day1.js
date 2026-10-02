//Variable & Data Types

const user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
}

user.role = "admin";

console.log(user)

delete user.email;

console.log(user)



//Operators & conditional statements

const ageA = 20;
const ageB = 25;

if (ageA > ageB) {
    console.log("Age A is greater than Age B");
} else if (ageA < ageB) {
    console.log("Age A is less than Age B");
} else {
    console.log("Age A is equal to Age B");
}

const discount = 10;

switch (discount) {
    case 5:
        console.log("5% discount");
        break;
    case 10:
        console.log("10% discount");
        break;
    case 15:
        console.log("15% discount");
        break;
    default:
        console.log("No discount");
}

const isLoggedIn = true;

//improve dari mentor jangan gunakan kode dibawah karena ternary sebenarnya merupakan expression bukan statement, jadi tidak bisa digunakan untuk menggantikan if else statement.
//isLoggedIn ? console.log("User is logged in") : console.log("User is not logged in");

const message = isLoggedIn ? "User is logged in" : "User is not logged in";

console.log(message);

// functions

//-- function declaration


//imporve dari mentor, sebaiknya gunakan parameter daripada menggunakan hardcode value di dalam function, agar lebih fleksibel dan reusable
function calculateTotal() {
    const price = 100;
    const tax = 0.1;
    const total = `harga: ${price}, pajak: ${tax}, total setelah pajak: ${price + (price * tax)}`;
    return total;
}

console.log(calculateTotal());

//--function expression

const calculateDiscount = (price) => {
    const discount = 0.1;
    const total = `harga sebelum diskon: ${price}, diskon: ${discount * price}, total setelah diskon: ${price - (price * discount)}`;
    return total;
}

console.log(calculateDiscount(120));


// function default parameters
const formatPrice = (price, rate, currency = "Rp") => {
    return `konversi Dolar ke Rupiah dari $${price} = ${currency} ${rate * price}`;
}

console.log(formatPrice(100, 17200));


//destructuring

const parseProtocolUrl = (url) => {
    const parseURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);

    if(!parseURL) {
        return false;
    }

    const [ , protocol, host, path] = parseURL;

    return `protocol: ${protocol}, host: ${host}, path: ${path}`;
}

console.log(parseProtocolUrl("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring"));


//improve dari kode dibawah, sebaiknya hanya gunakan city saja, karena propertyName dan variableName sama, jadi tidak perlu menulis city: city, cukup city saja
const userData = ({ name, address: { street, city } }) => {
    return `Hello ${name}, you live at ${street}, ${city}`;
}

console.log(userData(user));

const menus = [
    {
        name: "Nasi Goreng",
        price: 15000,
        category: {
            name: "Main Course",
            description: "Main course dishes"
        }
    },
    {
        name: "Mie Goreng",
        price: 12000,
        category: {
            name: "Main Course",
            description: "Main course dishes"
        }
    }
]

//impove kode dibawah, gunakan nama parameter yang readable, jangan gunakan nama parameter yang terlalu singkat, agar lebih mudah dibaca dan dimengerti
for(const { name: n, category: { name: c } } of menus) {
    console.log(`Menu: ${n}, Category: ${c}`);
}

//spread operator
//improve dari mentor, jangan gunakan spread operator pada primitive value seperti boolean, string, dan number karena tidak akan menghasilkan object yang diinginkan. Spread operator sebaiknya digunakan pada object atau array saja.
const obj = { ...true, ..."test", ...10 };

console.log(obj);

const numbers = [1, 2, 3, 4, 5];

const copyNumber = [...numbers];

console.log(copyNumber);

const sum = ( a, b, c ) => {
    return a + b + c;
}

console.log(sum(...numbers));
const calculate = function (...numbers) {
  console.log(numbers);
};

calculate(10, 20, 30, 40);


const isSummer = true;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : ["dates"])];

console.log(fruits);

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 };
console.log(mergedObj);
//rest operator

const multiply = (multiplier, ...theArgs) => {
    return theArgs.map((el) => multiplier * el);
}

console.log(multiply(2, 1, 2, 3, 4));


//Review Overall 8.1/10
//Point penting:
//1. Jangan hanya membuat koda yang "works" saja, tapi mulai berfikir untuk apakah kode ini sudah reusable.
//2. Perhatikan naming (variable, function, parameter), jangan terlalu singkat, gunakan nama yang readable dan mudah dimengerti.
//3. pahami 'why', bukan hanya syntax
//4. bejar tentang immutability
