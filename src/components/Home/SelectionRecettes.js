import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import RecetteCard from "../RecetteCard";

const SelectionRecettes = () => {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    axios.get("/recipes").then((res) => setAllRecipes(res.data));
  }, []);

  return (
    <div>
      <div className="recipesSelectionComponent">
        <h3>Voici quelque unes de nos recettes</h3>
        <div className="homeRecipeSelection">
          {allRecipes
          .slice(0, 4)
          .map((recipe) => {
            return <RecetteCard recette={recipe} />
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectionRecettes;
