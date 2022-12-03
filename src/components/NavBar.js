import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/connexion">Connexion</NavLink>
        <NavLink to="/recettes">Recettes</NavLink>
        <NavLink to="/mesrecettes">Mes recettes</NavLink>
      </header>
    </div>
  );
};

export default NavBar;
