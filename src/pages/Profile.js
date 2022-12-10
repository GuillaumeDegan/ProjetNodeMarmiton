import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <div>
            <NavBar />
            <h1>Mon profil</h1>

            <h5>Pseudo : {user.username}</h5>
            <h5>E-mail : {user.email}</h5>
            <h5>Téléphone : {user.phoneNumber}</h5>
            <h5>Mot de passe : {user.password}</h5>
            <Footer />
        </div>
    );
};

export default Profile;