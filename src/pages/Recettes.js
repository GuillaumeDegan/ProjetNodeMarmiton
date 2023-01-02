import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecettesList from "../components/Recettes/recettesList";

const Recettes = () => {
  return (
    <div>
      <NavBar />
      {/* <h1>Recettes :</h1> */}
      <RecettesList />
      <Footer />
    </div>
  );
};

export default Recettes;
