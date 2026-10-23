import { getRecipeById, getRecipeIngredients, addIngredientsToShoppingList } from "./recipeUtils.js";
import { saveToStorage, getFromStorage } from "./storage.js";

const recipes = [
    {
        id: 1,
        name: "Chicken Soup",
        servings: 2,
        ingredients: [
            { name: "Chicken", quantity: 200, unit: "g" },
            { name: "Carrot", quantity: 2, unit: "pcs" },
            { name: "Water", quantity: 500, unit: "ml" }
        ]
    },
    {
        id: 2,
        name: "Vegetable Salad",
        servings: 2,
        ingredients: [
            { name: "Lettuce", quantity: 100, unit: "g" },
            { name: "Tomato", quantity: 2, unit: "pcs" },
            { name: "Yoghurt", quantity: 50, unit: "g" }
        ]
    },
    {
        id: 3,
        name: "Tofu Soup",
        servings: 2,
        ingredients: [
            { name: "Tofu", quantity: 200, unit: "g" },
            { name: "Carrot", quantity: 1, unit: "pcs" },
            { name: "Water", quantity: 400, unit: "ml" }
        ]
    }
];

let shoppingList = getFromStorage("shoppingList") ?? [];

const renderRecipes = (recipes) => {

    const recipeList = document.querySelector("#recipeList");
    recipeList.replaceChildren();

    recipes.forEach((recipe) => {
        const recipeCard = document.createElement("article");
        recipeCard.classList.add("recipe-card");

        const recipeTitle = document.createElement("h3");
        recipeTitle.textContent = recipe.name;

        const recipeServing = document.createElement("p");
        recipeServing.textContent = `Servings: ${recipe.servings}`;

        const recipeButton = document.createElement("button");
        recipeButton.setAttribute("type", "button");
        recipeButton.textContent = "Add to Shopping List";
        recipeButton.addEventListener("click", function() {
            handleAddToShoppingList(recipe.id);
        });

        recipeCard.appendChild(recipeTitle);
        recipeCard.appendChild(recipeServing);
        recipeCard.appendChild(recipeButton);
        recipeList.append(recipeCard);
    });

};

const renderShoppingList = (shoppingList) => {
    const shoppingListElement = document.querySelector("#shoppingList");

    shoppingListElement.replaceChildren();

    if(!Array.isArray(shoppingList) || shoppingList.length === 0) {
        return;
    }

    shoppingList.forEach(item => {
        const ingredientsElement = document.createElement("li");

        const ingredientTitle = document.createElement("label");
        ingredientTitle.setAttribute("for", item.name);
        ingredientTitle.textContent = `${item.name}- ${item.quantity}${item.unit}`;
        
        const checklistButton = document.createElement("input");
        checklistButton.setAttribute("type", "checkbox");
        checklistButton.setAttribute("id", item.name);
        checklistButton.checked = item.isChecked;
        checklistButton.addEventListener("change", function() {
            handleCheckedList(item.id);
        });

        const removeListButton = document.createElement("button");
        removeListButton.setAttribute("type", "button");
        removeListButton.textContent = "Remove";
        removeListButton.addEventListener("click", function() {
            handleRemoveList(item.id);
        })

        ingredientsElement.appendChild(checklistButton);
        ingredientsElement.appendChild(ingredientTitle);
        ingredientsElement.appendChild(removeListButton);

        shoppingListElement.append(ingredientsElement);
    });

};

const handleAddToShoppingList = (recipeId) => {
    
    const recipeData = getRecipeById(recipes, recipeId);
    const recipe4Portion = getRecipeIngredients(recipeData, 4);

    shoppingList = addIngredientsToShoppingList(shoppingList, recipe4Portion);

    saveToStorage("shoppingList", shoppingList);
    renderShoppingList(shoppingList);
};

const handleCheckedList = (itemId) => {
    const updatedList = shoppingList.map(item => {
        if(item.id === itemId) {
            return {
                ...item,
                isChecked: !item.isChecked
            };
        };
        return item;
    });

    shoppingList = updatedList;
    saveToStorage("shoppingList", shoppingList);
    renderShoppingList(shoppingList);
};

const handleRemoveList = (itemId) => {
    const updatedList = shoppingList.filter(item => item.id !== itemId);

    shoppingList = updatedList;
    saveToStorage("shoppingList", shoppingList);
    renderShoppingList(shoppingList);
}

renderRecipes(recipes);
renderShoppingList(shoppingList);