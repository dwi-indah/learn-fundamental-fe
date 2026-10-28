import { useState } from "react";

function RecipeCard({ id, name, servings, description, isVegetarian }) {
  const [isFavorite, setIsFavorite] = useState(false);


  return(
    <article className="recipe-card" id={id}>
      <h2>{name}</h2>
      <p>Servings: {servings}</p>
      <button onClick={() => setIsFavorite(prev => !prev)}>
        { isFavorite ? "Remove from Favorites" : "Add to Favorites" }
      </button>
      <span>status: { isFavorite ? "Favorite" : "Not Favorite" }</span>
      {description && <p>{description}</p>}
      {isVegetarian && <p>Recipe is for Vegetarian</p>}
    </article>
  )
}

export default RecipeCard;