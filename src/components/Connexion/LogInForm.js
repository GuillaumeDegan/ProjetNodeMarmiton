import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from 'axios';
import { Navigate } from 'react-router-dom'

const LogInForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [ connected, setConnected ] = useState(false);

  function onSubmitHandler() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    axios.post("/users/login", {
      username: username,
      password: password
    }).then(function (response) {
      if(response.data.state) {
        setUser(response.data.user);
        setConnected(true);
      } else {
        console.log('mauvais mot de passe ou username')
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <div className="logInFormContainer">
        <h1>Connexion</h1>
        <form className="logInForm" action="">
          <div className="logInInputsContainer">
            <label htmlFor="usernameInput">Pseudo :</label>
            <input className="logInInputs" type="text" name="usernameInput" id="usernameInput" />
          </div>
          <div className="logInInputsContainer">
            <label htmlFor="passwordInput">Mot de passe :</label>
            <input className="logInInputs" type="password" name="passwordInput" id="passwordInput" />
          </div>
        </form>
        <button onClick={() => onSubmitHandler()}>soumettre</button>
        {connected ? <Navigate to='/home' /> : null}
      </div>
    </div>
  );
};

export default LogInForm;
