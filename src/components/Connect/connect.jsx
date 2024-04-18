import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/login.actions';
import './connect.css';

function Connect() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;
  const { isConnected } = useSelector(state => state.login);

  useEffect(() => {
    if (isConnected) {
      window.location.href = '/profil';
    }
    // Vérifiez si un token existe déjà dans le localStorage
    const token = sessionStorage.getItem('token');
    if (token) {
      // Redirigez l'utilisateur vers la page de profil
      window.location.href = '/profil';
    }
  }, [isConnected]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(username, password));
    console.log(isConnected)
    if (isConnected) {
      // Redirigez l'utilisateur vers la page de profil

      window.location.href = '/profil';
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
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
