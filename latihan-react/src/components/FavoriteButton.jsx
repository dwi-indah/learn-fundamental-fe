import { useContext, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function FavoriteButton() {
    const { favorites, setFavorites } = useContext(FavoritesContext);

    return (
        <button onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
    )
}

export default FavoriteButton;