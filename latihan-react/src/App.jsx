import { useState } from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard';
// import FavoriteButton from './components/FavoriteButton';

const recipes = [
  { id: 1, name: "Chicken Soup", servings: 2, category: "Soup" },
  { id: 2, name: "Vegetable Salad", servings: 2, category: "Salad" },
  { id: 3, name: "Tofu Soup", servings: 4, category: "Soup" },
  { id: 4, name: "Fried Rice", servings: 3, category: "Rice" },
];

function RecipeServings({ name }) {
  const [servings, setServings] = useState(2);

  return (
    <article className="recipe-card">
      <h2>{name}</h2>
      <p>Servings: {servings}</p>
      <div>
        <button onClick={() => setServings((previousServings) => previousServings + 1)}>+</button>
        {/* <button disabled={servings === 1} onClick={() => setServings((previousServings) => previousServings > 1 ? previousServings - 1 : previousServings)}>-</button> */}
        <button disabled={servings === 1} onClick={() => setServings((previousServings) => Math.max(1, previousServings - 1))}>-</button>
      </div>

    </article>
  )
}

function App() {
  const [category, setCategory] = useState("All");

  return (
    <>
      <section className='filter-list'>
        <button onClick={()=> setCategory("All")}>All</button>
        <button onClick={()=> setCategory("Soup")}>Soup</button>
        <button onClick={()=> setCategory("Salad")}>Salad</button>
        <button onClick={()=> setCategory("Rice")}>Rice</button>
      </section>
      <br />
      <section className="recipe-list">
        { recipes.filter((recipe) => category === "All" || recipe.category === category)
        .map((recipe) => (
          <RecipeCard key={recipe.id} id={recipe.id} name={recipe.name} servings={recipe.servings} />
        ))}
      </section>
    </>
  )
}

export default App
