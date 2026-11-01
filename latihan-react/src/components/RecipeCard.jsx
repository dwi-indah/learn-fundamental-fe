import { useState } from "react";

function RecipeCard({ id, name, servings, description, isVegetarian, onUpdateRecipe, onDeleteRecipe }) {
  const [isFavorite, setIsFavorite] = useState(false);


  return(
    <article className="recipe-card" id={id}>
      <h2>{name}</h2>
      <p>
        <button onClick={() => onUpdateRecipe(id, Math.max(1, servings - 1))}>-</button>
        {servings} servings 
        <button onClick={() => onUpdateRecipe(id, servings + 1)}>+</button></p>
      <button onClick={() => setIsFavorite(prev => !prev)}>
        { isFavorite ? "Remove from Favorites" : "Add to Favorites" }
      </button>
      <span>status: { isFavorite ? "Favorite" : "Not Favorite" }</span>
      {description && <p>{description}</p>}
      {isVegetarian && <p>Recipe is for Vegetarian</p>}
      <button onClick={() => onDeleteRecipe(id)}>Delete Recipe</button>
    </article>
  )
}

export default RecipeCard;