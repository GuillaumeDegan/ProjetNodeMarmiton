import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const [ redirect, setRedirect ] = useState(false);

  function disconnect() {
    setRedirect(true);
    setTimeout(() => window.location.reload(), 200);
  }

  function navBarState() {
    if (user === null) {
      return (
        <>
        <div className="options_header">
          <NavLink to="/" className={"button_header"}>Home</NavLink>
          <NavLink to="/connexion" className={"button_header"}>Connexion</NavLink>
          <NavLink to="/recettes" className={"button_header"}>Recettes</NavLink>
        </div>
        </>
      );
    } else {
      return (
        <>
          <div className="options_header1">
            <div>
              <NavLink to="/" className={"button_header"}>Home</NavLink>
              <NavLink to="/recettes" className={"button_header"} >Recettes</NavLink>
              <NavLink to="/mesrecettes" className={"button_header"}>Mes recettes</NavLink>
            </div>
            <div>
              <button onClick={() => disconnect()} className={"button_header"}>Deconnexion</button>
              <NavLink to="/profile" className={"button_header"}>{"Bienvenu " + user.username}</NavLink>
            </div>
          </div>
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
