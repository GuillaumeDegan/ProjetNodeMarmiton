import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const [ redirect, setRedirect ] = useState(false);

  function disconnect() {
    setRedirect(true);
    setTimeout(() => setUser(null), 200);
  }

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
          <button onClick={() => disconnect()}>Deconnexion</button>
          <dir>{"Bienvenu " + user.username}</dir>
          <NavLink to="/profile">Mon profil</NavLink>
        </>
      );
    }
  }

  return (
    <div>
      <header>{navBarState()}</header>
      {redirect ? <Navigate to='/home' /> : null}
    </div>
  );
};

export default NavBar;
