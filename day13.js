// const recipe = {
//     name: "Chicken Soup",
//     ingredients: ["Chicken", "Carrot"]
// };

// function getRecipeInfo(recipe) {
//     if (typeof recipe.name !== "string" || !recipe.name.trim()) {
//         throw new Error("Recipe name is required");
//     }

//     if (!recipe.name) {
//         throw new Error("Recipe name is required");
//     }

//     if (!Array.isArray(recipe.ingredients) ||
//     recipe.ingredients.length === 0 ) {
//         throw new Error("Recipe must have ingredients");
//     }

//     console.log(recipe.name.toUpperCase());
//     console.log(recipe.ingredients.length);
// }

// try {
//     getRecipeInfo(recipe);
// } catch (error) {
//     console.log(error.message);
// }


const recipe = {
    id: 1,
    name: "Chicken Soup",
    ingredients: ["Chicken", "Carrot"],
    servings: 2
};
const recipe2 = {
    id: 2,
    name: "Chicken Sou",
    ingredients: 200,
    servings: 2
};
const recipe3 = {
    id: 3,
    name: "Pizza",
    ingredients: ["Chicken", "Carrot"],
    servings: null
};

const validateRecipe = (recipe) => {
    if(!recipe) {
        throw new Error("Recipe not found!");
    };

    if(typeof recipe.name !== "string" || !recipe.name.trim()) {
        throw new Error("Recipe name is required!");
    };

    if(!Array.isArray(recipe.ingredients) ||
    recipe.ingredients.length === 0) {
        throw new Error("Recipe must have ingredients");
    };

    if(typeof recipe.servings !== "number" || recipe.servings <= 0) {
        throw new Error("Recipe servings must be greater than zero");
    };

    return true;

}

const saveRecipe = (recipe) => {
    try {
        validateRecipe(recipe);
        console.log("Recipe saved successfully");
    } catch(error) {
        console.error(error.message);
    } finally {
        console.log("Recipe saving process finished")
    }
}

console.log(saveRecipe(recipe));
console.log(saveRecipe(recipe2));
console.log(saveRecipe(recipe3));