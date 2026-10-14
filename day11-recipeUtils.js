export const calculateTotalPrice = (ingredients) => {
    return ingredients.reduce(
        (total, ingredient) => total + ingredient.price, 0
    );
};

export const getAvailableRecipes = (recipes) => {
    return recipes.filter(recipe => recipe.isAvailable === true);
}