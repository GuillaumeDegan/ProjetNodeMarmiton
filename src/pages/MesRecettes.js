import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecettesList from "../components/MesRecettes/RecettesList";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from 'react-router-dom';

const MesRecettes = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <NavBar />
      <RecettesList />
      <Footer />
      {user === null ? <Navigate to='/connexion' /> : null}
    </div>
  );
};

export default MesRecettes;
