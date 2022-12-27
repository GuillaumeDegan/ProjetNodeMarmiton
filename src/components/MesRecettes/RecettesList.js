import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from 'axios';
import NewRecipe from "./NewRecipe";
import RecetteCard from "../RecetteCard";

const RecettesList = () => {
  const { user, setUser } = useContext(UserContext);
  const [ allRecipes, setAllRecipes ] = useState([]);
  const [ isEmpty, setIsEmpty ] = useState(true);
  const [ newRecipe, setNewRecipe ] = useState(false)
  const [ recipeToUpdate, setRecipeToUpdate ] = useState(null)

  useEffect(() => {
    axios
      .get("/recipes")
      .then((res) => setAllRecipes(res.data));
  }, []);

  function updateMyRecipes() {
    setNewRecipe(false);
    axios
      .get("/recipes")
      .then((res) => setAllRecipes(res.data));
  }

  function deleteItem(id) {
    axios
      .delete("/recipes/" + id)
      .then(
        updateMyRecipes()
      )
  }

  function deleteConfirmation(id) {
    document.getElementById("deleteButton" + id).style.display = "none";
    document.getElementById("confirmationDelete" + id).style.display = "flex";
    document.getElementById("updateButton" + id).style.display = "none";
  }

  function deleteConfirmationCancel(id) {
    document.getElementById("deleteButton" + id).style.display = "block";
    document.getElementById("confirmationDelete" + id).style.display = "none";
    document.getElementById("updateButton" + id).style.display = "block";
  }

  return (
    <div>
      <div className="mesRecettesComponent">
        <h1 className="MyRecipesTitle">Mes recettes</h1>
        <button className="showAddFormRecipe" onClick={() => setNewRecipe(true)}>+ Nouvelle Recette</button>
        {newRecipe ? <NewRecipe recipeToUpdate={recipeToUpdate} updateFunction={updateMyRecipes} /> : null}
        <div className="myRecipesContainer">
        {allRecipes.map((recipe) => {
          if(recipe.id_user === user._id) {
                if(isEmpty) {setIsEmpty(false)}
                return <div key={recipe._id}>
                    <RecetteCard recette={recipe}/>
                    <div className="buttonContainer">
                      <button id={"updateButton" + recipe._id} className="ModifButton" onClick={() => {
                        setNewRecipe(true);
                        setRecipeToUpdate(recipe);
                      }}>Modifier</button>
                      <div style={{display: "none"}} id={"confirmationDelete" + recipe._id} className="DeleteConfirmationContainer">
                        <p>Êtes vous sûrs ?</p>
                        <button className="AnnulButton" onClick={() => deleteConfirmationCancel(recipe._id)}>Annuler</button>
                        <button className="SupprButton" onClick={() => deleteItem(recipe._id)}>Oui</button>
                      </div>
                      <div id={"deleteButton" + recipe._id}>
                        <button className="SupprButton" onClick={() => deleteConfirmation(recipe._id)}>Supprimer</button>
                      </div>
                    </div>
                  </div>
        }})}
        {isEmpty ? "Vous n'avez pas de recette" : null}
        </div>
      </div>
      
    </div>
  );
};

export default RecettesList;
