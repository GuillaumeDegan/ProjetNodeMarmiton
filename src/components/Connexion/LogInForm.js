import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from 'axios';
import { Navigate } from 'react-router-dom'

const LogInForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [ usersData, setUsersData ] = useState([]);
  const [ connected, setConnected ] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/users")
      .then((res) => setUsersData(res.data));
  }, []);

  function onSubmitHandler() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    usersData.map((user) => {
      if (username === user.username && password === user.password) {
          setUser(user);
          setConnected(true);
        }
    }) 
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
            <label htmlFor="passwordInput">Mot de passe lol:</label>
            <input className="logInInputs" type="text" name="passwordInput" id="passwordInput" />
          </div>
        </form>
        <button onClick={() => onSubmitHandler()}>soumettre</button>
        {connected ? <Navigate to='/home' /> : null}
      </div>
    </div>
  );
};

export default LogInForm;
