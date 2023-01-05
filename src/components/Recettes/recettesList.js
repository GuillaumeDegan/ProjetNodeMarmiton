import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RecetteCard from "../RecetteCard";

const RecettesList = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [categoryChoosed, setCategoryChoosed] = useState("");

  useEffect(() => {
    axios.get("/recipes").then((res) => setAllRecipes(res.data));
  }, []);

  function chooseCategory(cat) {
    const elements = document.querySelectorAll('.selectCategoryButton');
    elements.forEach(function(element) {
      element.classList.remove('selectedButtonCategory');
    });

    document.getElementById(cat + "SelectButton").className = "selectedButtonCategory selectCategoryButton";
    setCategoryChoosed(cat)
  }

  return (
    <div>
      <div className="allRecipesContainer">
        <h1>Toute les recettes</h1>
        <div className="selectCategoryMenu">
          <div id="SelectButton" className="selectCategoryButton selectedButtonCategory" onClick={() => chooseCategory('')}>Tout</div>
          <div id="EntréeSelectButton" className="selectCategoryButton" onClick={() => chooseCategory('Entrée')}>Entrées</div>
          <div id="PlatSelectButton" className="selectCategoryButton" onClick={() => chooseCategory('Plat')}>Plats</div>
          <div id="DessertSelectButton" className="selectCategoryButton" onClick={() => chooseCategory('Dessert')}>Desserts</div>
        </div>
        <div className="myRecipesContainer">
          {allRecipes
          .filter((recipe) => recipe.category.includes(categoryChoosed))
          .map((recipe) => {
            return (
              <div key={recipe._id}>
                <RecetteCard recette={recipe} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecettesList;
