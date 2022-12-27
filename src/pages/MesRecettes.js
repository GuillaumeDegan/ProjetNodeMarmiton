import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecettesList from "../components/MesRecettes/RecettesList";

const MesRecettes = () => {
  return (
    <div>
      <NavBar />
      <RecettesList />
      <Footer />
    </div>
  );
};

export default MesRecettes;
