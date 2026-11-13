import { createContext, useCallback, useMemo, useState } from "react";

export const FavoritesContext = createContext(null);

export function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = useCallback((recipe) => {
        setFavorites((prevFavorites) => {
            const alreadyFavorite = prevFavorites.some(item => item.id === recipe.id);

            if(alreadyFavorite) {
                return prevFavorites;
            }

            return [...prevFavorites, recipe]
        });
    }, [])

    const removeFavorite = useCallback((recipeId) => {
        setFavorites((prevFavorites) => prevFavorites.filter((recipe) => recipe.id !== recipeId))
    }, [])

    const isFavorite = useCallback((recipeId) => {
        return favorites.some((recipe) => recipe.id === recipeId);
    }, [favorites])
    const contextValue = useMemo(() => ({
                favorites,
                addFavorite,
                removeFavorite,
                isFavorite
                }), [favorites, addFavorite, removeFavorite, isFavorite]);
            

    return (
        <FavoritesContext.Provider 
            value={contextValue}
            >

            {children}
            
        </FavoritesContext.Provider>
    )
}