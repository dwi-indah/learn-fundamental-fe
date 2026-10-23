const getRecipeById = (recipes,id) => {
    return recipes.find(recipe => recipe.id === id);
};

const getRecipeIngredients = (recipe, servings) => {
    const ratio = servings / recipe.servings;
    return recipe.ingredients.map(item => {
        return {
            ...item,
            quantity: item.quantity * ratio
        }
    });
};

const addIngredientsToShoppingList = (shoppingList, ingredients) => {
    const newShoppingList = ingredients.map((ingredient) => {
        return {
            id: crypto.randomUUID(),
            name: ingredient.name,
            quantity: ingredient.quantity,
            unit: ingredient.unit,
            isChecked: false
        }
    });

    return [...shoppingList, ...newShoppingList];
}

export { getRecipeById, getRecipeIngredients, addIngredientsToShoppingList };