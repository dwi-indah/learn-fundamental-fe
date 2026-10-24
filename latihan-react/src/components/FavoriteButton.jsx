import { useState } from "react";

function FavoriteButton() {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <button onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
    )
}

export default FavoriteButton;

        /* {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} name={recipe.name} servings={recipe.servings} />
        ))} */