import React from 'react';
import axios from 'axios';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const NewRecipe = ({ test }) => {
    const { user, setUser } = useContext(UserContext);

    function createNewRecipe() {
        const name = document.getElementById("RecipeName").value;
        const category = document.getElementById("RecipeCategory").value;
        const servings = document.getElementById("RecipeServings").value;
        const ingredients = document.getElementById("RecipeIngredients").value;
        const steps = document.getElementById("RecipeSteps").value;
        const cooking = document.getElementById("RecipeCooking").value;
        const prepTime = document.getElementById("RecipePrepTime").value;
        const image = document.getElementById("RecipeImage").value;

        axios.post("http://localhost:4000/api/v1/recipes", {
            name: name,
            category: category,
            id_user: user._id,
            servings: servings,
            ingredients: ingredients,
            steps: steps,
            cooking: cooking,
            prepTime: prepTime,
            image: image
        }).then(function (response) {
            console.log(response);
            test()
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <form className='newRecipeForm' action="">
                <div className='inputContainer'>
                    <label htmlFor="RecipeName">Nom de la recette</label>
                    <input id='RecipeName' type="text" />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipeCategory">Catégorie</label>
                    <input id='RecipeCategory' type="text" />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipeServings">Nombre de personnes</label>
                    <input id='RecipeServings' type="number" />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipeIngredients">Ingrédients</label>
                    <input id='RecipeIngredients' type="text" />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipeSteps">Etapes</label>
                    <textarea name="" id="RecipeSteps" cols="30" rows="10"></textarea>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipeCooking">Cuisson</label>
                    <select id='RecipeCooking'>
                        <option value={false}>Non</option>
                        <option value={true}>Oui</option>
                    </select>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipePrepTime">Temps de préparation (en minutes)</label>
                    <input id='RecipePrepTime' type="number" />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipeImage">Image</label>
                    <input id='RecipeImage' type="text" />
                </div>
            </form>
            <button onClick={() => createNewRecipe()}>Créer</button>
        </div>
    );
};

export default NewRecipe;