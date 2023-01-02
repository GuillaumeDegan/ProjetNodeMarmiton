import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import RecetteCard from "../RecetteCard";


const RecettesList = () => {

  const [allRecipes, setAllRecipes] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    axios.get("/recipes").then((res) => setAllRecipes(res.data));
  }, []);

  return (
    <div>
      <div className="allRecipesContainer">
        Toute les recettes seront dans ce div
        <div className="myRecipesContainer">
          {allRecipes.map((recipe) => {
            return (
              <div key={recipe._id}>
                <RecetteCard recette={recipe} />
                <div className="buttonContainer">
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

};

export default RecettesList;
