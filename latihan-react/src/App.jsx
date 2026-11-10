import { useState } from 'react';
import './App.css';
import RecipeForm from './components/RecipeForm';
import RecipeCard from './components/RecipeCard';
import EffectPractice from './components/EffectPractice';
import useLocalStorage from './hooks/useLocalStorage.js';
import { FavoritesContext, FavoritesProvider } from './context/FavoritesContext.jsx';
import FavoritesList from './components/FavoritesList.jsx';

function RecipeAvailability({recipes}) {
  return (
    <>
      {recipes.length === 0 ? 
        <p>No recipes available.</p> : <p>Recipes are available.</p>
      }
    </>
  )
}

function App() {

  const defaultRecipes = [
    { id: 1, name: "Chicken Soup", servings: 2, category: "Soup" },
    { id: 2, name: "Vegetable Salad", servings: 2, category: "Salad" },
    { id: 3, name: "Tofu Soup", servings: 4, category: "Soup" },
    { id: 4, name: "Fried Rice", servings: 3, category: "Rice" },
    { id: 5, name: "Beef Stew", servings: 5, category: "Soup" },
  ];

  const [recipes, setRecipes] = useLocalStorage("recipes", defaultRecipes);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);


  const handleAddRecipe = (newRecipe) => {
    setRecipes(prevRecipes => [
      ...prevRecipes, 
      {
        ...newRecipe,
        name: typeof newRecipe.name === 'string' ? newRecipe.name : String(newRecipe.name || ""),
        servings: Number(newRecipe.servings) || 1, 
        category: String(newRecipe.category || "Uncategorized")
      }  
    ]);
  };

  const handleUpdateRecipe = (recipeId, newServings) => {
    setRecipes((prevRecipes) => 
      prevRecipes.map((recipe) => 
        recipe.id === recipeId ? {...recipe, servings: newServings} : recipe
      )
    );
  }

  const handleDeleteRecipe = (recipeId) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== recipeId));
  }

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesName = recipe.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || recipe.category === category;

    return matchesName && matchesCategory;
  });

  return (
    <main>
      <FavoritesProvider>
        <RecipeAvailability recipes={recipes}/>
        <br/>
        <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search recipes..." />

        <section className='filter-list'>
          <button onClick={()=> setCategory("All")}>All</button>
          <button onClick={()=> setCategory("Soup")}>Soup</button>
          <button onClick={()=> setCategory("Salad")}>Salad</button>
          <button onClick={()=> setCategory("Rice")}>Rice</button>
        </section>
        <br />
        <section className="recipe-list">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id}
                id={recipe.id}
                name={recipe.name}
                servings={recipe.servings}
                description={recipe.description}
                isVegetarian={recipe.isVegetarian}
                onUpdateRecipe={handleUpdateRecipe}
                onDeleteRecipe={handleDeleteRecipe}
              />
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </section>

        <br />
        <RecipeForm onAddRecipe={handleAddRecipe} />
        <br />
        <button onClick={() => setIsVisible(prev => !prev)}>
          { isVisible ? "Hide Effect Practice" : "Show Effect Practice" }
        </button>
        {isVisible && <EffectPractice />}

        <FavoritesList />
      </FavoritesProvider>
    </main>
  )
}

export default App
