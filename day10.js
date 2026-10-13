const addToFav = document.querySelector("#favoriteButton");

addToFav.addEventListener("click", function() {
    const isFav = addToFav.classList.toggle("is-favorite");

    addToFav.textContent = isFav ? "Remove Favorite" : "Add to Favorite";

    addToFav.setAttribute("aria-pressed", isFav);
})

const addIngredient = document.querySelector("#addIngredient");
const removeIngredient = document.querySelector("#removeIngredient");
const shoppingList = document.querySelector("#shoppingList");
const inputIngredient = document.querySelector("#addItem");

addIngredient.addEventListener("click", function(event) {
    event.preventDefault();

    const ingredient = inputIngredient.value.trim();

    if(ingredient === "") {
        return;
    }

    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;

    shoppingList.append(ingredientEl);
    inputIngredient.value = "";
})

removeIngredient.addEventListener("click", function() {
    shoppingList.replaceChildren();
})