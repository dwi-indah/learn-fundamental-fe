// const products = [
//     {
//         id: 1,
//         name: "Keyboard",
//         price: 500000
//     },
//     {
//         id: 2,
//         name: "Mouse",
//         price: 250000
//     },
//     {
//         id: 3,
//         name: "Monitor",
//         price: 2000000
//     },
//     {
//         id: 4,
//         name: "Headset",
//         price: 600000
//     }
// ];

// const nameAllProducts = products.map(product => product.name);
// console.log(nameAllProducts);

// const listProducts = products.map((product) => {
//     return `${product.name} - Rp${product.price}`;
// });
// console.log(listProducts);

// const productWithTotal = products.map((product) => {
//     return {
//         ...product,
//         subtotal: product.price
//     }
// });
// console.log(productWithTotal);

// const productMoreThan5K = products.filter(product => product.price >= 500000);
// console.log(productMoreThan5K);

// const productLessThan5K = products.filter(product => product.price < 500000);
// console.log(productLessThan5K);

// const productID3 = products.find(product => product.id === 3);
// console.log(productID3);

//perbedaan map() dan filter()
//map() untuk ngeubah setiap item, sedangkan filter() digunakan untuk memilih item dengan kondisi yang ditentukan

//perbedaan filter() dan find()
//filter() akan mengembalikan semua item yang memenuhi kondisi, sedangkan find() hanya mengembalikan 1 item(item pertama yang memenuhi kondisi)

//map() tidak mengubah array original

//method map()


// const products = [
//     {
//         id: 1,
//         name: "Keyboard",
//         price: 500000,
//         category: "electronics",
//         stock: 10
//     },
//     {
//         id: 2,
//         name: "Mouse",
//         price: 250000,
//         category: "electronics",
//         stock: 0
//     },
//     {
//         id: 3,
//         name: "Monitor",
//         price: 2000000,
//         category: "electronics",
//         stock: 5
//     },
//     {
//         id: 4,
//         name: "Notebook",
//         price: 50000,
//         category: "stationery",
//         stock: 20
//     }
// ];

// products.forEach(product => console.log(product.name));

// const productStockEmpty = products.some(product => product.stock === 0);
// console.log(productStockEmpty)

// const productHasStock = products.every(product => product.stock > 0);
// console.log(productHasStock)

// const categories = ["electronics", "stationery"];

// console.log(categories.includes("electronics"));
// console.log(categories.includes("fashion"));

// const producNameMoreThan5K = products.filter(product => product.price >= 500000)
//     .map(product => product.name);
// console.log(producNameMoreThan5K);

//1. gunakan forEach() saat ingin melakukan sesuatu, tanpa membuat array baru
//2. some() digunakan untuk mengecek setidaknya ada satu item yang memenuhi kondisi, sedangkan every() digunakan untuk mengecek semua item
//3. karena di javascript ada fitur chaining, artinya menggabungkan proses

const cart = [
    {
        id: 1,
        name: "Keyboard",
        price: 500000,
        quantity: 2,
        category: "electronics"
    },
    {
        id: 2,
        name: "Mouse",
        price: 250000,
        quantity: 3,
        category: "electronics"
    },
    {
        id: 3,
        name: "Monitor",
        price: 2000000,
        quantity: 1,
        category: "electronics"
    },
    {
        id: 4,
        name: "Notebook",
        price: 50000,
        quantity: 5,
        category: "stationery"
    }
];

const itemName = cart.map(item => item.name);
console.log(itemName);

const itemsWithQuantityAtLeast2 = cart.filter(item => item.quantity >= 2);
console.log(itemsWithQuantityAtLeast2);

const itemWithID3 = cart.find(item => item.id === 3);
console.log(itemWithID3);

const hasItemWithQuantityAtLeast5 = cart.some(item => item.quantity >= 5);
console.log(hasItemWithQuantityAtLeast5);

const allItemsInStock = cart.every(item => item.quantity > 0);
console.log(allItemsInStock);

const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
}, 0);
console.log(totalQuantity);

const grandTotal = cart.reduce((acc, item) => {
    return acc + (item.quantity * item.price);
}, 0);
console.log(grandTotal);

const itemNameWithStockMoreThan2 = cart.filter(item => item.category === "electronics" && item.quantity >= 2)
    .map(item => item.name);

console.log(itemNameWithStockMoreThan2);

const summary = cart.reduce((acc, item) => {
    acc.totalQuantity += item.quantity;
    acc.grandTotal += item.price * item.quantity;

    return acc;
}, {
    totalQuantity: 0,
    grandTotal: 0
});
console.log(summary);