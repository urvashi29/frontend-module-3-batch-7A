import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/data.json";

const RecipeDetails = () => {
  const [recipes, setRecipes] = useState(data);

  const params = useParams(); //accessing routing parameter
  console.log(params.recipeid);//

  const filterData = recipes.filter((recipe) => {
    return recipe.idCategory == params.recipeid;
  });

  return (
    <div>
      {filterData.map((recipe) => {
        return <p>{recipe.strCategory}</p>;
      })}
    </div>
  );
};

export default RecipeDetails;
