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
  const [ deleteClicked, setDeleteClicked ] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/recipes")
      .then((res) => setAllRecipes(res.data));
  }, []);

  function updateMyRecipes() {
    setNewRecipe(false);
    axios
      .get("http://localhost:4000/api/v1/recipes")
      .then((res) => setAllRecipes(res.data));
  }

  function deleteItem(id) {
    axios
      .delete("http://localhost:4000/api/v1/recipes/" + id)
  }

  return (
    <div>
      <div className="mesRecettesComponent">
        <button onClick={() => setNewRecipe(true)}>Créer une nouvelle recette</button>
        {newRecipe ? <NewRecipe test={updateMyRecipes} /> : null}
        <h1>Recettes créées par moi ici</h1>
        {allRecipes.map((recipe) => {
          if(recipe.id_user === user._id) {
                if(isEmpty) {setIsEmpty(false)}
                return <div key={recipe._id}>
                  <li>{recipe.name}</li>
                  <button>Modifier</button>
                  {deleteClicked ? 
                  <div>
                    Etes vous surs ? 
                    <button onClick={() => setDeleteClicked(false)}>Annuler</button>
                    <button onClick={() => deleteItem(recipe._id)}>Supprimer</button></div>
                    : 
                    <button onClick={() => setDeleteClicked(true)}>Supprimer</button>}
                  </div>
              }
        })}
        {isEmpty ? "Vous n'avez pas de recette" : null}
      </div>
      
    </div>
  );
};

export default RecettesList;
