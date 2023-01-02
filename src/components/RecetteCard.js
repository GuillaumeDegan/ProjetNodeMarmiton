import React from 'react';
import { NavLink } from 'react-router-dom';

const RecetteCard = (recette) => {
    const recipe = recette.recette;
    return (
        <div>
            <NavLink to={"/recette/id" + recipe._id}>
                <div className='RecipeCardContainer'>
                    <img src={recipe.image} alt={recipe.name + " image"} />
                    <div className='RecipeCardTextPart'>
                    <h4>{recipe.name}</h4>
                        <h5 className='card_writting'>{recipe.category}</h5>
                        <div className='recipeInfos'>
                            <div>
                                <img src="./prepTimeIcon.png" alt="" />
                                <h5 className='card_writting'>{recipe.prepTime}mins</h5>
                            </div>
                            <div>
                                <img src='./servingsIcon.png' alt="" />
                                <h5 className='card_writting'>{recipe.servings}</h5>
                            </div>
                        </div> 
                    </div>
                </div>
            </NavLink>  
        </div>
    );
};

export default RecetteCard;