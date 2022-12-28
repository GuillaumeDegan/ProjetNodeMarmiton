import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from 'axios';
import { useState, useEffect } from "react";

const Recette = () => {
  const [recipe, setRecipe] = useState({})
  const [recipeOwner, setRecipeOwner] = useState("")

  useEffect(() => {
    axios
      .get("/recipes/" + window.location.pathname.split('id')[1])
      .then((res) => populateData(res.data));    
  }, []);

  function populateData(recipe) {
    setRecipe(recipe)
    arrangeSteps(recipe.steps)
    axios
      .get("/users/" + recipe.id_user)
      .then((res) => setRecipeOwner(res.data.username))
  }

  function arrangeSteps(steps) {
    var stepsArranged = steps.split('!!')
    var returnP = "";

    stepsArranged.map((step) => {
      returnP += "<p>" + step + "</p>"
    })

    document.getElementById('stepsParagraph').innerHTML = returnP;
  }
  
  return (
    <div>
      <NavBar />
      <div className="uniqueRecipeContainer">
        <h1 id="recipeOwnerText" className="RecetteTitle">{recipe.name}</h1>
        <h3 className="RecetteUser">Par : {recipeOwner}</h3>
        <img src={recipe.image} alt={recipe.name + " image"} />
        <h3 className="RecipeSubtitles">Informations :</h3>
        <div className="informationsContainer">
          <div><img src="/categoryIcon.png" alt="" />catégorie : {recipe.category}</div>
          <div><img src="/cookingIcon.png" alt="" />{recipe.cooking === true ? "Besoin de cuisson" : "Pas de cuisson"}</div>
          <div><img src="/prepTimeIcon.png" alt="" /> {recipe.prepTime}mins</div>
          <div><img src="/servingsIcon.png" alt="" />{recipe.servings} personnes</div>
        </div>
        <h3 className="RecipeSubtitles">Ingrédients :</h3>
        <div className="ingredientsContainer">
          <dir>{recipe.ingredients}</dir>
        </div>
        <h3 className="RecipeSubtitles">Etapes :</h3>
        <p id="stepsParagraph"></p>
      </div>
      <Footer />
    </div>
  );
};

export default Recette;
