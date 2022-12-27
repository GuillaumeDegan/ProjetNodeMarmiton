import React from 'react';
import axios from 'axios';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useEffect } from 'react';

const NewRecipe = ({ recipeToUpdate, updateFunction }) => {
    const { user, setUser } = useContext(UserContext);

    function UpdateOrCreateRecipe() {
        const name = document.getElementById("RecipeName").value;
        const category = document.getElementById("RecipeCategory").value;
        const servings = document.getElementById("RecipeServings").value;
        const ingredients = document.getElementById("RecipeIngredients").value;
        const steps = document.getElementById("RecipeSteps").value;
        const cooking = document.getElementById("RecipeCooking").value;
        const prepTime = document.getElementById("RecipePrepTime").value;
        const image = document.getElementById("RecipeImage").value;

        if(recipeToUpdate === null) {
            axios.post("/recipes", {
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
                updateFunction()
              })
              .catch(function (error) {
                console.log(error);
              });
        } else {
            axios.patch("/recipes/" + recipeToUpdate._id, {
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
                updateFunction()
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }

    useEffect(() => {
        if(recipeToUpdate !== null) {
            document.getElementById("RecipeName").value = recipeToUpdate.name;
            document.getElementById("RecipeCategory").value = recipeToUpdate.category;
            document.getElementById("RecipeServings").value = recipeToUpdate.servings;
            document.getElementById("RecipeIngredients").value = recipeToUpdate.ingredients;
            document.getElementById("RecipeSteps").value = recipeToUpdate.steps;
            document.getElementById("RecipeCooking").value = recipeToUpdate.cooking;
            document.getElementById("RecipePrepTime").value = recipeToUpdate.prepTime;
            document.getElementById("RecipeImage").value = recipeToUpdate.image;
            document.getElementById("RecipeFormButton").innerHTML = "Modifier";
        }
    })

    return (
        <div className='recipeFormContainer'>
            <form className='newRecipeForm' action="">
                <div className='inputContainer'>
                    <label htmlFor="RecipeName">Nom de la recette :</label>
                    <input id='RecipeName' type="text" />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipeCategory">Catégorie :</label>
                    <input id='RecipeCategory' type="text" />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipeServings">Nombre de personnes :</label>
                    <input id='RecipeServings' type="number" />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipeIngredients">Ingrédients :</label>
                    <input id='RecipeIngredients' type="text" />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipeSteps">Etapes :</label>
                    <textarea name="" id="RecipeSteps" cols="30" rows="10"></textarea>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipeCooking">Cuisson :</label>
                    <select id='RecipeCooking'>
                        <option value={false}>Non</option>
                        <option value={true}>Oui</option>
                    </select>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipePrepTime">Temps de préparation (en minutes) :</label>
                    <input id='RecipePrepTime' type="number" />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="RecipeImage">Lien de l'image :</label>
                    <input id='RecipeImage' type="text" />
                </div>
            </form>
            <div className='newRecipeFormButtonsContainer'>
                <button class="HideRecipeFormButton" onClick={() => updateFunction()}>Annuler</button>
                <button id="RecipeFormButton" onClick={() => UpdateOrCreateRecipe()}>Créer</button>
            </div>
        </div>
    );
};

export default NewRecipe;