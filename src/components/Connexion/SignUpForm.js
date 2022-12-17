import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const SignUpForm = () => {
    const { user, setUser } = useContext(UserContext);
    const [ connected, setConnected ] = useState(false);

    function onSubmitHandler() {
        const username = document.getElementById("usernameInput").value;
        const email = document.getElementById("emailInput").value;
        const phoneNumber = document.getElementById("phoneNumberInput").value;
        const password = document.getElementById("passwordInput").value;

        axios.post("/users", {
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        }).then(function (response) {
            console.log(response);
            setUser(response.data);
            setConnected(true);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
        <div className="SignUpFormContainer">
            <h1>Créer un compte</h1>
            <form className="SignUpForm" action="">
                <div className="SignUpInputsContainer">
                    <label htmlFor="usernameInput">Pseudo :</label>
                    <input type="text" name="usernameInput" id="usernameInput" />  
                </div>
                <div className="SignUpInputsContainer">
                    <label htmlFor="emailInput">E-mail :</label>
                    <input type="text" name="emailInput" id="emailInput" />
                </div>
                <div className="SignUpInputsContainer">
                    <label htmlFor="phoneNumberInput">Numéro de téléphone :</label>
                    <input type="text" name="phoneNumberInput" id="phoneNumberInput" />
                </div>
                <div className="SignUpInputsContainer">
                    <label htmlFor="passwordInput">Mot de passe :</label>
                    <input type="text" name="passwordInput" id="passwordInput" />
                </div>
            </form>
        <button onClick={() => onSubmitHandler()}>soumettre</button>
      </div>
      {connected ? <Navigate to='/home' /> : null}
    </div>
    );
};

export default SignUpForm;