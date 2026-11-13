import { useState } from "react"
import RecipeInfo from "./RecipeInfo";

function RecipeParent() {
    const [count, setCount] = useState(0);
    const [recipeName, setRecipeName] = useState("");


    return (
        <div>
            <RecipeInfo name={recipeName} category="soup" />
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
            <input type="text" value={recipeName} onChange={(event) => setRecipeName(event.target.value)} placeholder="Recipe Name..." />
            <p>{recipeName}</p>
        </div>
    )
}

export default RecipeParent;