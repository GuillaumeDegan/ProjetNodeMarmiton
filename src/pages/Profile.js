import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    const [ switchToUpdateForm, setSwitchToUpdateForm ] = useState(false);
    const [ changePwd, setChangePwd ] = useState(false);

    const [FormState, setFormState] = useState({
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password,
      });

    function updateProfile() {
        if(changePwd) {
            axios.patch("/users/" + user._id, {
                username: FormState.username,
                email: FormState.email,
                phoneNumber: FormState.phoneNumber,
                password: document.getElementById('newPwdInput').value,
            }).then(function (response) {
                console.log(response);
                setUser(response.data);
                setSwitchToUpdateForm(false);
              })
              .catch(function (error) {
                console.log(error);
              });
        } else {
            axios.patch("/users/" + user._id, {
                username: FormState.username,
                email: FormState.email,
                phoneNumber: FormState.phoneNumber,
            }).then(function (response) {
                console.log(response);
                setUser(response.data);
                setSwitchToUpdateForm(false);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }

    function handleChange(e) {
        setFormState({
          ...FormState,
          [e.target.name]: e.target.value,
        });
      }

    return (
        <div>
            <NavBar />
            <div className='profileContainer'>
                <h1 className='profileTitle'>Mon profil</h1>
                {switchToUpdateForm ? 
                <div className='profileUpdateForm'>
                    <form action="">
                        <label htmlFor="">Pseudo : </label>
                        <input type="text" name="username" value={FormState.username} onChange={handleChange}/>
                        <label htmlFor="">E-mail : </label>
                        <input type="text" name="email" value={FormState.email} onChange={handleChange}/>
                        <label htmlFor="">Téléphone : </label>
                        <input type="text" name="phoneNumber" value={FormState.phoneNumber} onChange={handleChange}/>
                        <label htmlFor="">Mot de passe : </label>
                        {changePwd ? 
                        <input type="text" name="password" id="newPwdInput"/>
                        : 
                        <div className='button-bas'><button onClick={() => setChangePwd(true)}>Changer le mot de passe</button></div>
                        }
                    </form>
                    <div className='sendFormButtons'>
                        <button className='ValidButton' onClick={() => updateProfile()}>Valider</button>
                        <button className='cancelButton' onClick={() => setSwitchToUpdateForm(false)}>Annuler</button>
                    </div>
                </div>
                : 
                    <div className='profileCard'>
                        <img className='profilePP' src="/defaultpp.jpeg" alt="default profile picture" />
                        <div>
                            <h5>Pseudo : <span>{user.username}</span></h5>
                            <h5>E-mail : <span>{user.email}</span></h5>
                            <h5>Téléphone : <span>{user.phoneNumber}</span></h5>
                            <button onClick={() => setSwitchToUpdateForm(true)}>Modifier le profile</button>
                        </div>
                    </div>
                }
            </div>
            <Footer />
            {user === null ? <Navigate to='/connexion' /> : null}
        </div>
    );
};

export default Profile;