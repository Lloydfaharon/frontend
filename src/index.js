import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import reportWebVitals from './reportWebVitals';

// Redux
import { Provider } from 'react-redux';
import store from './redux/Store/index';
import { login, userProfile } from './redux/actions/all.actions';


// Fonction asynchrone pour effectuer la connexion instantanée
const connectInstantly = async () => {
  // Démarrer l'action userProfile dès le début de l'application
  store.dispatch(userProfile());

  // Vérifier si le token existe dans le localStorage
  const token = localStorage.getItem('token');
  
  console.log(token)
  if (token) {
    // Si le token existe, déclencher l'action de connexion avec ce token
    store.dispatch(login(token));
  }
};

// Appeler la fonction pour effectuer la connexion instantanée
connectInstantly();





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
