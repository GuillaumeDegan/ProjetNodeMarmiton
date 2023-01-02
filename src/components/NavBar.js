import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  function disconnect() {
    setRedirect(true);
    setTimeout(() => window.location.reload(), 200);
  }

  function navBarState() {
    if (user === null) {
      return (
        <>
        <head> <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
        
       
 
        </head>
          <div className="options_header">
            
            <div className="header_button" NavLink to="/">
              <NavLink to="/" className={"button_header"}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  className="svg-header"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </NavLink>
            </div>
            <NavLink to="/connexion" className={"button_header"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                className="svg-header"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </NavLink>
            <NavLink to="/recettes" className={"button_header"}>
              Recettes
            </NavLink>
          </div>
        </>
      );
    } else {
      return (
        <>
         <head> <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
         
  
         </head>
          <div className="options_header1">
            <div>
              <NavLink to="/" className={"button_header"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  className="svg-header"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </NavLink>
              <NavLink to="/recettes" className={"button_header"}>
                Recettes
              </NavLink>
              <NavLink to="/mesrecettes" className={"button_header"}>
                Mes recettes
              </NavLink>
            </div>
            <div>
              <button onClick={() => disconnect()} className={"button_header"}>
                Deconnexion
              </button>
              <NavLink to="/profile" className={"button_header"}>
                {"Bienvenu " + user.username}
              </NavLink>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <div>
      <header>{navBarState()}</header>
      {redirect ? <Navigate to="/home" /> : null}
    </div>
  );
};

export default NavBar;
