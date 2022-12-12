import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from 'axios';

const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    const [ switchToUpdateForm, setSwitchToUpdateForm ] = useState(false);

    console.log(user.username)
    const [FormState, setFormState] = useState({
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password,
      });

    function updateProfile() {
        console.log(FormState)
        axios.patch("http://localhost:4000/api/v1/recipes/" + user._id, {
            username: FormState.username,
            email: FormState.email,
            phoneNumber: FormState.phoneNumber,
            password: FormState.password,
        }).then(function (response) {
            console.log(response);
            setSwitchToUpdateForm(false);
            setUser(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
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
            <h1 className='profileTitle'>Mon profil</h1>

            {switchToUpdateForm ? 
            <div className='profileUpdateForm'>
                <form action="">
                    <div>
                        <label htmlFor="">Pseudo : </label>
                        <input type="text" name="username" value={FormState.username} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">E-mail : </label>
                        <input type="text" name="email" value={FormState.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Téléphone : </label>
                        <input type="text" name="phoneNumber" value={FormState.phoneNumber} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Mot de passe : </label>
                        <input type="text" name="password" value={FormState.password} onChange={handleChange}/>
                    </div>
                </form>
                <button onClick={() => updateProfile()}>Valider</button>
                <button onClick={() => setSwitchToUpdateForm(false)}>Annuler</button>
            </div>
            : 
                <div className='profileCard'>
                    <h5>Pseudo : <span>{user.username}</span></h5>
                    <h5>E-mail : <span>{user.email}</span></h5>
                    <h5>Téléphone : <span>{user.phoneNumber}</span></h5>
                    <h5>Mot de passe : <span>{user.password}</span></h5>
                    <button onClick={() => setSwitchToUpdateForm(true)}>Modifier le profile</button>
                </div>
            }
            
            <Footer />
        </div>
    );
};

export default Profile;