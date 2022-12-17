import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from 'axios';
import NewRecipe from "./NewRecipe";

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
    console.log(id)
    document.getElementById("deleteButton" + id).style.display = "none";
    document.getElementById("confirmationDelete" + id).style.display = "block";
  }

  function deleteConfirmationCancel(id) {
    document.getElementById("deleteButton" + id).style.display = "block";
    document.getElementById("confirmationDelete" + id).style.display = "none";
  }

  return (
    <div>
      <div className="mesRecettesComponent">
        <button onClick={() => setNewRecipe(true)}>Créer une nouvelle recette</button>
        {newRecipe ? <NewRecipe recipeToUpdate={recipeToUpdate} updateFunction={updateMyRecipes} /> : null}
        <h1>Recettes créées par moi ici</h1>
        {allRecipes.map((recipe) => {
          if(recipe.id_user === user._id) {
                if(isEmpty) {setIsEmpty(false)}
                return <div key={recipe._id}>
                    <li>{recipe.name}</li>
                    <button onClick={() => {
                      setNewRecipe(true);
                      setRecipeToUpdate(recipe);
                    }}>Modifier</button>
                    <div style={{display: "none"}} id={"confirmationDelete" + recipe._id}>
                      Etes vous surs ? 
                      <button onClick={() => deleteConfirmationCancel(recipe._id)}>Annuler</button>
                      <button onClick={() => deleteItem(recipe._id)}>Supprimer</button>
                    </div>
                    <div id={"deleteButton" + recipe._id}>
                      <button onClick={() => deleteConfirmation(recipe._id)}>Supprimer</button>
                    </div>
                  </div>
        }})}
        {isEmpty ? "Vous n'avez pas de recette" : null}
      </div>
      
    </div>
  );
};

export default RecettesList;
