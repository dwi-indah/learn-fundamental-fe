// const shoppingList = [
//     { id: 1, name: "Chickwen", quantity: 2 },
//     { id: 2, name: "Carrot", quantity: 5 }
// ];

//exercise 1
const recipe = {
    id: 1,
    name: "Chicken Soup",
    serving: 2,
    ingredients: ["Chicken", "Carrot", "Water"]
};

localStorage.setItem("favoriteRecipe", JSON.stringify(recipe));

const getRecipe = localStorage.getItem("favoriteRecipe");

const parsedRecipe = getRecipe ? JSON.parse(getRecipe) : null;

console.log(parsedRecipe.name, parsedRecipe.servings);


//exercise 2
const saveToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const getFromStorage = (key) => {
    const storedData = localStorage.getItem(key);

    if(storedData === null) {
        return null;
    };

    try {
        return JSON.parse(storedData);
    } catch(error) {
        console.log("Failed to parse stored data: ",error.message);
        return null;
    }
};

const recipeData =  saveToStorage("recipeData",recipe);
const getRecipeData = getFromStorage("recipeData");
const wrongRecipeData = getFromStorage("recipData");


//exercise 3
const shoppingList = [
    { id: 1, name: "Chicken", quantity: 2, unit: "kg" },
    { id: 2, name: "Carrot", quantity: 5, unit: "pcs" },
    { id: 3, name: "Potato", quantity: 3, unit: "pcs" }
];

localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

const storedShoppingList = localStorage.getItem("shoppingList");

const parsedShoppingList = storedShoppingList ? JSON.parse(storedShoppingList) : [];

const shoppingData = parsedShoppingList.map(item => {
    return {
    name: item.name,
    quantity: item.quantity
}});

console.log(shoppingData);

const newShoppingList = parsedShoppingList.map(item => {
    if(item.id === 1) {
        return {
            ...item,
            quantity: 10
        };
    };

    return item;
});

localStorage.setItem("shoppingList", JSON.stringify(newShoppingList));

const storedNewShoppingList = localStorage.getItem("shoppingList");

const parsedNewShoppingList = storedNewShoppingList ? JSON.parse(storedNewShoppingList) : [];
console.log(parsedNewShoppingList);

