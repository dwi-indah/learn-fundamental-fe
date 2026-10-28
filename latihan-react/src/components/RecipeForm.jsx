import { useState } from "react";

function RecipeForm({onAddRecipe}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [servings, setServings] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess]= useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    
    const trimmedName = name.trim();
    const trimmedDescription = description.trim();
    const convertServings = Number(servings);
    
    if(trimmedName === "") {
      setError("Recipe name is required.");
      return;
    } 

    if(trimmedDescription === "") {
        setError("Description must be filled!");
        return;
    }

    if(category === "") {
        setError("Category must be choosen");
        return
    }

    if(servings.trim() === "") {
        setError("Servings is required");
        return;
    } else if(Number.isNaN(convertServings)) {
        setError("Serving must be number");
        return;
    } else if(!Number.isInteger(convertServings)) {
        setError("Serving must be a whole number");
        return;
    } else if(convertServings < 1) {
        setError("serving at leat 1 portion");
        return;
    }

    setError("");
    
    const newRecipe = {
        id: crypto.randomUUID(),
        name: trimmedName,
        description: trimmedDescription,
        category: category,
        servings: convertServings,
        isVegetarian: isVegetarian
    };

    onAddRecipe(newRecipe);

    setName("");
    setDescription("");
    setCategory("");
    setServings("");
    setIsVegetarian(false);
    setSuccess(true);
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Recipe Name</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Input recipe name" />
      </div>
      <div>
        <label htmlFor="description">Recipe Description</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Input recipe description"/>
      </div>
      <div>
        <label htmlFor="category">Choose Category</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Choose a category</option>
          <option value="Soup">Soup</option>
          <option value="Salad">Salad</option>
          <option value="Rice">Rice</option>
        </select>
      </div>
      <div>
        <label htmlFor="servings">Servings</label>
        <input id="servings" type="number" value={servings} onChange={(e) => setServings(e.target.value)} min="1"/>
      </div>
      <div>
        <label htmlFor="vegetarian">Vegetarian</label>
        <input id="vegetarian" type="checkbox" checked={isVegetarian} onChange={(e) => setIsVegetarian(e.target.checked)} />
      </div>
      {error && <p role="alert">{error}</p>}
      {success && <p role="alert">Recipe save successfully!</p>}
      <button type="submit">Save Recipe</button>
    </form>
  )
}

export default RecipeForm;