import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecettesList from "../components/MesRecettes/RecettesList";

const MesRecettes = () => {
  return (
    <div>
      <NavBar />
      <h1>Mes recettes</h1>
      <RecettesList />
      <Footer />
    </div>
  );
};

export default MesRecettes;
