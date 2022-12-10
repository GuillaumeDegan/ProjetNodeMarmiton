import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  function navBarState() {
    if (user === null) {
      return (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/connexion">Connexion</NavLink>
          <NavLink to="/recettes">Recettes</NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recettes">Recettes</NavLink>
          <NavLink to="/mesrecettes">Mes recettes</NavLink>
          <button onClick={() => setUser(null)}>Deconnexion</button>
          <dir>{"Bienvenu " + user.username}</dir>
          <NavLink to="/profile">Mon profil</NavLink>
        </>
      );
    }
  }

  return (
    <div>
      <header>{navBarState()}</header>
    </div>
  );
};

export default NavBar;
