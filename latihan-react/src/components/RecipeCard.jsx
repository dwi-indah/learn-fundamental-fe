import { useState } from "react";

function RecipeCard({ id, name, servings }) {
  const [isFavorite, setIsFavorite] = useState(false);


  return(
    <article className="recipe-card">
      <h2>{name}</h2>
      <p>Servings: {servings}</p>
      <button onClick={() => setIsFavorite(prev => !prev)}>
        { isFavorite ? "Remove from Favorites" : "Add to Favorites" }
      </button>
      <span>status: { isFavorite ? "Favorite" : "Not Favorite" }</span>
    </article>
  )
}

export default RecipeCard;