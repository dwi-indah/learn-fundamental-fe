import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoritesList = () => {
    const { favorites } = useContext(FavoritesContext);
    
    return (
        <div>
            { favorites.length === 0 ? 
                <p>No favorite recipes yet.</p> :
                <div className="favorite-list">
                    {
                        favorites.map(favorite => 
                            <div className="favorite-card" key={favorite.id}>
                                <h3>{favorite.name}</h3>
                                <p>{favorite.servings} servings</p>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default FavoritesList;