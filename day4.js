const user = {
    id: 1,
    name: "Dwi",
    email: "dwi@example.com",
    role: "Frontend Developer",
    address: {
        city: "Salatiga",
        country: "Indonesia"
    }
};

const { name, email, role } = user;
console.log(name, email, role);

const { address: { city, country }} = user;
console.log(city,country);

const { name: userName, address: { city: userCity }} = user;
console.log(userName, userCity);

const product = {
    id: 1,
    name: "Keyboard",
    price: 500000,
    stock: 10
};

const updatedProduct = {
    ...product,
    price: 550000,
    stock: 8
};
console.log(updatedProduct);

const products = [
    {
        id: 1,
        name: "Keyboard",
        price: 500000
    },
    {
        id: 2,
        name: "Mouse",
        price: 250000
    },
    {
        id: 3,
        name: "Monitor",
        price: 2000000
    }
];

const productsWithFormattedPrice = products.map(product => ({
    // return {
        ...product,
        formattedPrice: `Rp${product.price}`
    // }
}));
console.log(productsWithFormattedPrice);

const apiProducts = [
    {
        id: 1,
        product_name: "Keyboard",
        product_price: 500000,
        product_stock: 10
    },
    {
        id: 2,
        product_name: "Mouse",
        product_price: 250000,
        product_stock: 0
    },
    {
        id: 3,
        product_name: "Monitor",
        product_price: 2000000,
        product_stock: 5
    }
];
const listProducts = apiProducts.map(product => {
    return {
        id: product.id,
        name: product.product_name,
        price: product.product_price,
        stock: product.product_stock,
        isAvaiable: product.product_stock > 0
    }
});
// const listProducts = apiProducts.map(({
//     id,
//     product_name,
//     product_price,
//     product_stock
// }) => {
//     return {
//         id,
//         name: product_name,
//         price: product_price,
//         stock: product_stock,
//         isAvailable: product_stock > 0
//     };
// });
console.log(listProducts)