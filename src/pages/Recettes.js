import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecettesList from "../components/Recettes/recettesList";

const Recettes = () => {
  return (
    <div>
      <NavBar />
      <RecettesList />
      <Footer />
    </div>
  );
};

export default Recettes;
