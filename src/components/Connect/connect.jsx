import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Ajout de useSelector
import { useNavigate } from 'react-router-dom'; 
import { login, userProfile, showLoginErrorMessage } from '../../redux/actions/all.actions'; // Importez showLoginErrorMessage
import './connect.css';

function Connect() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;
  const errorMessageVisible = useSelector(state => state.login.displayLoginErrorMessage); // Utilisez useSelector pour accéder à l'état errorMessageVisible

  
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(username, password));
      await dispatch(userProfile()); 
      navigate('/profil'); 
      
    } catch (err) {
      console.log(err)
      
      dispatch(showLoginErrorMessage()); // Utilisez l'action showLoginErrorMessage en cas d'échec de connexion
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {/* Affiche le message d'erreur s'il y en a un */}
        <p className={`error-message ${errorMessageVisible ? 'visible' : 'hidden'}`}>Erreur dans l'identifiant ou le mot de passe</p> {/* Utilisez la classe conditionnelle errorMessageVisible */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="current-username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Connect;



