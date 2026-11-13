import { memo } from "react";

const RecipeInfo = memo(function RecipeInfo({ name, category }) {
    // console.log("RecipeInfo rendered");
    return(
        <div>
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
        </div>
    )
});

export default RecipeInfo;