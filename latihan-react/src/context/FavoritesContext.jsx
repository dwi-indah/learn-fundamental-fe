import { createContext, useState } from "react";

export const FavoritesContext = createContext(null);

export function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (recipe) => {
        setFavorites((prevFavorites) => {
            const alreadyFavorite = prevFavorites.some(item => item.id === recipe.id);

            if(alreadyFavorite) {
                return prevFavorites;
            }

            return [...prevFavorites, recipe]
        });
    }

    const removeFavorite = (recipeId) => {
        setFavorites((prevFavorites) => prevFavorites.filter((recipe) => recipe.id !== recipeId))
    }

    const isFavorite = (recipeId) => {
        return favorites.some((recipe) => recipe.id === recipeId);
    }

    return (
        <FavoritesContext.Provider 
            value={{ 
                favorites, 
                addFavorite, 
                removeFavorite, 
                isFavorite 
            }}>

            {children}
            
        </FavoritesContext.Provider>
    )
}