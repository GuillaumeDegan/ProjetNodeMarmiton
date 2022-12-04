import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const LogInForm = () => {
  const { user, setUser } = useContext(UserContext);

  function onSubmitHandler() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    if (username === "patrick" && password === "123") {
      setUser(username);
    } else {
      alert("mauvais mdp ou username");
    }
  }

  return (
    <div>
      <div className="logInForm">
        <form action="">
          <label htmlFor="usernameInput">Pseudo :</label>
          <input type="text" name="usernameInput" id="usernameInput" />
          <label htmlFor="passwordInput">Mot de passe :</label>
          <input type="text" name="passwordInput" id="passwordInput" />
        </form>
        <button onClick={() => onSubmitHandler()}>soumettre</button>
      </div>
    </div>
  );
};

export default LogInForm;
