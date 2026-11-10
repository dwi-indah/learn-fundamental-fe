import { useContext } from "react";
import TogglePractice from "./TogglePractice";
import { FavoritesContext } from "../context/FavoritesContext";

function RecipeCard({ id, name, servings, description, isVegetarian, onUpdateRecipe, onDeleteRecipe }) {
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const checkIfFavorite = isFavorite(id);

  const handleFavoriteToggle = () => {
    if(checkIfFavorite) {
      removeFavorite(id);
    } else {
      const recipeData = { id, name, servings, description, isVegetarian };
      addFavorite(recipeData);
    }
  }

  return(
    <article className="recipe-card" id={id}>
      <h2>{name}</h2>
      <p>
        <button onClick={() => onUpdateRecipe(id, Math.max(1, servings - 1))}>-</button>
        {servings} servings 
        <button onClick={() => onUpdateRecipe(id, servings + 1)}>+</button></p>
      <button onClick={handleFavoriteToggle}>
        {checkIfFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <span>status: { checkIfFavorite ? "Favorite" : "Not Favorite" }</span>
      {description && 
        <TogglePractice text="Description">
          {description}
        </TogglePractice>}
      {isVegetarian && 
        <TogglePractice text="Vegetarian">
          <p>Recipe is for Vegetarian</p>
        </TogglePractice>}
      <button onClick={() => onDeleteRecipe(id)}>Delete Recipe</button>
    </article>
  )
}

export default RecipeCard;