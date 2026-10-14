import { calculateTotalPrice, getAvailableRecipes } from "./day11-recipeUtils.js";

const ingredients = [
    { name: "Spinach", price: 10000 },
    { name: "Tofu", price: 15000 }
];

console.log(calculateTotalPrice(ingredients));

const recipes = [
    { id: 1, name: "Chicken Soup", isAvailable: true },
    { id: 2, name: "Fried Rice", isAvailable: false },
    { id: 3, name: "Tofu Soup", isAvailable: true }
];

console.log(getAvailableRecipes(recipes));

console.log("Start");

setTimeout(() => {
    console.log("Timer finished");
}, 1000);

console.log("Done");

const loadRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
        if(recipeID === 1) {
            resolve({ id: 1, name: "Chicken Soup", isAvailable: true});
        } else {
            reject("Recipe not found");
        }
    });
};

loadRecipe(1)
    .then(({ name }) => {
        console.log(`Nama Resep: ${name}`);
    })
    .catch((error) => {
        console.log(`Terjadi error: ${error}`);
    });
    
loadRecipe(2)
    .then(({ name }) => {
        console.log(`Nama Resep: ${name}`);
    })
    .catch((error) => {
        console.log(`Terjadi error: ${error}`);
    });