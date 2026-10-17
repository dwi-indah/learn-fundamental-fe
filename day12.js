const getRecipe = (recipeId) => {
    return new Promise((resolve, reject) => {
        if(recipeId === 1) {
            resolve({
                id: 1,
                name: "Chicken Soup",
                isAvailable: true
            });
        } else {
            reject(new Error("Recipe not found"));
        }
    });
};

// async function showRecipe(recipeId) {
//     const recipe = await getRecipe(recipeId);
//     console.log(recipe.name);
// }

const loadRecipe = async (recipeId) => {
    try {
        const recipe = await getRecipe(recipeId);
        console.log(recipe.name);
    } catch(error) {
        console.log(error.message)
    }
}

loadRecipe(1);
loadRecipe(2);

const fetchRecipesName = async () => {
    try {
        const response = await fetch("https://dummyjson.com/recipes?limit=5");

        if(!response.ok) {
            throw new Error("Failed to fetch recipes");
        }

        const data = await response.json();
        data.recipes.forEach(recipe => console.log(recipe.name));
    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchRecipesName();

const statusElement = document.querySelector("#status");
const recipeList = document.querySelector("#recipeList");
const buttonLoadRecipes = document.querySelector("#loadRecipes");

const fetchRecipes = async () => {
    recipeList.replaceChildren();
    statusElement.textContent = "Loading recipes...";
    fetchRecipes();

    try {
        const response = await fetch("https://dummyjson.com/recipes?limit=5");

        if(!response.ok) {
            throw new Error("Failed to fetch recipes");
        }

        const data = await response.json();
        data.recipes.forEach((recipe) => {
            const recipeNameElement = document.createElement("li");
            recipeNameElement.textContent = recipe.name;

            recipeList.append(recipeNameElement);
        });

        statusElement.textContent = "";
    } catch (error) {
        console.log("Error:", error);
        statusElement.textContent = `Terjadi Error: ${error.message}`;
    }
}

buttonLoadRecipes.addEventListener("click", fetchRecipes)

