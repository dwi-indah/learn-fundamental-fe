const groceries = [
    {
        id: 1,
        name: "Spinach",
        category: "Vegetable",
        price: 10000,
        quantity: 3,
        unit: "kg",
        inStock: true
    },
    {
        id: 2,
        name: "Chicken Wings",
        category: "Meat",
        price: 50000,
        quantity: 1,
        unit: "kg",
        inStock: true
    },
    {
        id: 3,
        name: "Yoghurt",
        category: "Dairy",
        price: 25000,
        quantity: 0,
        unit: "liter",
        inStock: false
    },
    {
        id: 4,
        name: "Tofu",
        category: "Protein",
        price: 15000,
        quantity: 1,
        unit: "kg",
        inStock: true
    },
    {
        id: 5,
        name: "Lettuce",
        category: "Vegetable",
        price: 10000,
        quantity: 1,
        unit: "kg",
        inStock: true
    }
];

const getAvailableItems = groceries => {
    return groceries.filter(grocery => grocery.inStock);
};

const getItemsByCategory = (groceries, category) => {
    return groceries.filter(grocery => grocery.category === category);
};

const generateShoppingList = (groceries) => {
    return groceries.map(({ name, quantity, unit, price }) => {
        return {
            name,
            quantity,
            unit,
            price,
            totalPrice: price * quantity
        };
    });
};

const calculateTotalPrice = (groceries) => {
    return groceries.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0 );
};

const calculateTotalQuantity = (groceries) => {
    return groceries.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);
};

const updateQuantity = (groceries, id, newQuantity) => {
    return groceries.map((grocery) => {
        if(grocery.id === id) {
            return {
                ...grocery,
                quantity: newQuantity,
            };
        };
        return grocery;
    });
};

const removeGrocery = (groceries, id) => {
    return groceries.filter(grocery => grocery.id !== id);
};

const processGroceries = (groceries, callback) => {
    return callback(groceries);
}

const shoppingList = processGroceries(groceries, generateShoppingList);
console.log(shoppingList);

const availableItems = processGroceries(groceries, getAvailableItems);
console.log(availableItems);

const totalPrice = processGroceries(groceries, calculateTotalPrice);
console.log(totalPrice);

const getVegetables = getItemsByCategory(groceries, "Vegetable");
console.log(getVegetables);

const updateSpinachQty = updateQuantity(groceries, 1, 5);
console.log(updateSpinachQty);

const removeTofu = removeGrocery(groceries, 4);console.log(removeTofu);

