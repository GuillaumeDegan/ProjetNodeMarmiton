import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LogInForm from "../components/Connexion/LogInForm";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import SignUpForm from "../components/Connexion/SignUpForm";
import { useState } from "react";

const Connexion = () => {
  const { user, setUser } = useContext(UserContext);
  const [ alreadyHasAccount, setAlreadyHasAccount ] = useState(true)

  return (
    <div>
      <NavBar />
      {
      alreadyHasAccount ? 
        <div className="connexionFormContainer">
          <LogInForm /> 
          <p className="connexionP">Vous n'avez pas encore de compte ? <span className="connexionSpan" onClick={() => setAlreadyHasAccount(false)}>Créer un compte</span></p>
        </div>  
        : 
        <div className="connexionFormContainer">
          <SignUpForm /> 
          <p className="connexionP">Vous avez déjà un compte ? <span className="connexionSpan" onClick={() => setAlreadyHasAccount(true)}>Connectez vous</span></p>
        </div>
      }
      <Footer />
    </div>
  );
};

export default Connexion;
