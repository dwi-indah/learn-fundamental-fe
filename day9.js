const title = document.querySelector("#appTitle");
const description = document.querySelector(".appDescription");

console.log(title, description);
console.log(title.textContent, description.textContent);

const btnUpdate = document.getElementById('updateButton');

btnUpdate.addEventListener('click', function() {
    title.textContent = "Discover New Recipes";
    description.textContent = "Find your next favorite meal";
    title.classList.add = "update";
});

const recipeCard = document.querySelector('.recipeCard');
const recipeName = document.querySelector('.recipeName');
const recipeImg = document.querySelector('#recipeImage');
const btnRecipe = document.querySelector('#favoriteButton');

btnRecipe.addEventListener('click', function() {
    recipeName.textContent =  "Vegetable Soup"
    recipeImg.setAttribute("alt", "Ubah atribut alt gambar menjadi");
    recipeCard.classList.add = "is-favorite";
})