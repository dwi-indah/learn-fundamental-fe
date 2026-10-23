import './App.css'

function RecipeCard({ name, servings }) {
  return(
    <article>
      <h2>{name}</h2>
      <p>Servings: {servings}</p>
    </article>
  )
}

function App() {

  return (
    <>
      <RecipeCard name="Chicken Soup" servings={4} />
      <RecipeCard name="Vegetable Salad" servings={2} />
      <RecipeCard name="Tofu Soup" servings={3} />
    </>
  )
}

export default App
