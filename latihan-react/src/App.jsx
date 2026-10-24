import { useState } from 'react';
import './App.css';
// import FavoriteButton from './components/FavoriteButton';


function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>Increase</button>
      <button onClick={() => setCount((previousCount) => previousCount - 1)}>Decrase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

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

function RecipeCard({ name, servings }) {
  const [isFavorite, setIsFavorite] = useState(false);


  return(
    <article>
      <h2>{name}</h2>
      <p>Servings: {servings}</p>
      <button onClick={() => setIsFavorite(!isFavorite)}>
        { isFavorite ? "Remove from Favorites" : "Add to Favorites" }
      </button>
      <span>status: { isFavorite ? "Favorite" : "Not Favorite" }</span>
    </article>
  )
}

function App() {

  return (
    <>
      <Counter />
      <br />
      <RecipeServings name="Chicken Soup" />
      <br />
      <RecipeCard name="Tofu Soup" servings={3} />
    </>
  )
}

export default App
