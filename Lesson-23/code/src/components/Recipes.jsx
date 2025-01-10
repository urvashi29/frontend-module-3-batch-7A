import React, { useState } from "react";
import data from "../assets/data.json";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState(data);

  return (
    <>
      {recipes.map((recipe) => {
        return (
          <div>
            <h2>
              <Link to={`/recipes/${recipe.idCategory}`}>
                {recipe.strCategory}
              </Link>
            </h2>
            <img
              src={recipe.strCategoryThumb}
              alt={`data-${recipe.strCategoryThumb}`}
            />
            <p>{recipe.strCategoryDescription}</p>
          </div>
        );
      })}
    </>
  );
};

export default Recipes;
