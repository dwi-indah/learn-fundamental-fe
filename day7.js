const groceries = [
    {
        id: 1,
        name: "Tomato",
        category: "Vegetable",
        price: 12000,
        quantity: 2,
        unit: "kg",
        inStock: true
    },
    {
        id: 2,
        name: "Chicken Breast",
        category: "Meat",
        price: 45000,
        quantity: 1,
        unit: "kg",
        inStock: true
    },
    {
        id: 3,
        name: "Milk",
        category: "Dairy",
        price: 18000,
        quantity: 2,
        unit: "liter",
        inStock: true
    },
    {
        id: 4,
        name: "Cheese",
        category: "Dairy",
        price: 30000,
        quantity: 1,
        unit: "pack",
        inStock: false
    },
    {
        id: 5,
        name: "Potato",
        category: "Vegetable",
        price: 15000,
        quantity: 3,
        unit: "kg",
        inStock: true
    }
];

//execise 1
const listProductName = groceries.map(grocery => grocery.name);
console.log(listProductName);

const listProductCategories = groceries.map(grocery => grocery.category);
console.log(listProductCategories);

const listGroceries = groceries.map(({ name, quantity, unit } )=> {
    return {
        name: name,
        quantity: quantity,
        unit: unit,
    }
});
console.log(listGroceries);

//exercise 2
const getAvaiableGroceries = function() {
    return groceries.filter(grocery => grocery.inStock === true);
};
console.log(getAvaiableGroceries());

const getVegetables = function() {
    return groceries.filter(grocery => grocery.category === "Vegetable");
};
console.log(getVegetables());

const getDairyProducts = function() {
    return groceries.filter(grocery => grocery.category === "Dairy");
};
console.log(getDairyProducts());

//exercise 3
const findGroceryById = function(id) {
    return groceries.find(grocery => grocery.id === id);
};
console.log(findGroceryById(3))
console.log(findGroceryById(99))

//exercise 4
const calculateTotalPrice = function(groceries) {
    return groceries.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0)
}
console.log(calculateTotalPrice(groceries));

//exercise 5
const calculateTotalQuantity = function(groceries) {
    return groceries.reduce((acc, number) => {
        return acc + number.quantity;
    }, 0)
};
console.log(calculateTotalQuantity(groceries));

//exercise 6
const generateShoppingList = function() {
    return groceries.map(({ name, quantity, unit, price } )=> {
        return {
            name: name,
            quantity: quantity,
            unit: unit,
            totalPrice: price * quantity
        }
    });
}
console.log(generateShoppingList());

//exercise 7
const updateQuantity = function(groceries, id, newQuantity) {
    return groceries.map(grocery => {
        if(grocery.id === id) {
            return {
                ...grocery,
                quantity: newQuantity
            }
        }
        return grocery;
    })
};

console.log(groceries);
const updatedGroceries = updateQuantity(groceries, 1, 5);
console.log(updatedGroceries);

//exercise 8
const removeGrocery = (groceries, id) => {
    return groceries.filter(grocery => grocery.id !== id);
}
const groceriesWithoutCheese = removeGrocery(groceries, 4);
console.log(groceriesWithoutCheese);