import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import NewRecipe from "./NewRecipe";
import RecetteCard from "../RecetteCard";

const RecettesList = () => {
  const { user, setUser } = useContext(UserContext);
  const [allRecipes, setAllRecipes] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [newRecipe, setNewRecipe] = useState(false);
  const [recipeToUpdate, setRecipeToUpdate] = useState(null);

  useEffect(() => {
    axios.get("/recipes").then((res) => setAllRecipes(res.data));
  }, []);

  function updateMyRecipes() {
    setNewRecipe(false);
    axios.get("/recipes").then((res) => setAllRecipes(res.data));
  }

  function deleteItem(id) {
    axios.delete("/recipes/" + id).then(updateMyRecipes());
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
        <button
          className="showAddFormRecipe"
          onClick={() => setNewRecipe(true)}
        >
          + Nouvelle Recette
        </button>
        {newRecipe ? (
          <NewRecipe
            recipeToUpdate={recipeToUpdate}
            updateFunction={updateMyRecipes}
          />
        ) : null}
        <div className="myRecipesContainer">
          {allRecipes.map((recipe) => {
            if (recipe.id_user === user._id) {
              if (isEmpty) {
                setIsEmpty(false);
              }
              return (
                <div key={recipe._id}>
                  <RecetteCard recette={recipe} />
                  <div className="buttonContainer">
                    <button
                      id={"updateButton" + recipe._id}
                      className="ModifButton"
                      onClick={() => {
                        setNewRecipe(true);
                        setRecipeToUpdate(recipe);
                      }}
                    >
                      {" "}
                      modifier
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                        className="svg-recettes"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                    <div
                      style={{ display: "none" }}
                      id={"confirmationDelete" + recipe._id}
                      className="DeleteConfirmationContainer"
                    >
                      <p>Êtes vous sûrs ?</p>
                      <div className="button-confirmation">
                      <button
                        className="AnnulButton"
                        onClick={() => deleteConfirmationCancel(recipe._id)}
                      >
                        Annuler
                      </button>
                      <button
                        className="SupprButton1"
                        onClick={() => deleteItem(recipe._id)}
                      >
                        Oui
                      </button>
                      </div>
                    </div>
                    <div id={"deleteButton" + recipe._id}>
                      <button
                        className="SupprButton"
                        onClick={() => deleteConfirmation(recipe._id)}
                      >
                        Supprimer{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                          className="svg-recettes1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          {isEmpty ? "Vous n'avez pas de recette" : null}
        </div>
      </div>
    </div>
  );
};

export default RecettesList;
