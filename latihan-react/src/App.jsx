import { useState } from 'react';
import './App.css';
import RecipeForm from './components/RecipeForm';
import RecipeCard from './components/RecipeCard';

const recipes = [
  { id: 1, name: "Chicken Soup", servings: 2, category: "Soup" },
  { id: 2, name: "Vegetable Salad", servings: 2, category: "Salad" },
  { id: 3, name: "Tofu Soup", servings: 4, category: "Soup" },
  { id: 4, name: "Fried Rice", servings: 3, category: "Rice" },
];

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
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesName = recipe.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || recipe.category === category;

    return matchesName && matchesCategory;
  });

  return (
    <>
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
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </section>

      <br />
      <RecipeForm />
    </>
  )
}

export default App
