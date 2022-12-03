import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LogInForm from "../components/Connexion/LogInForm";

const Connexion = () => {
  return (
    <div>
      <NavBar />
      <h1>Connexion / inscription</h1>
      <LogInForm />
      <Footer />
    </div>
  );
};

export default Connexion;
