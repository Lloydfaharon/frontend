import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Transaction from '../../components/Transaction/transaction';
import EditName from '../../components/EditName/editName';
import TransactionData from '../../data/transactionData.json';
import './profilePage.css';

// Composant pour le message d'invitation à la connexion
const LoginMessage = () => (
  <h1>Veuillez vous connecter pour accéder à cette page.</h1>
);

function ProfilePage() {
  // Obtenez l'état de connexion à partir du Redux store
  const { isConnected } = useSelector(state => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifiez si l'utilisateur n'est pas connecté et redirigez-le vers la page de connexion
    if (!isConnected) {
      navigate("/login");
    }
  }, [isConnected, navigate]); // Dépendance vide pour n'exécuter qu'une seule fois

  return (
    <main className="main bg-dark">
      {isConnected ? (
        <div className="profile-content">
          <EditName/>
          {TransactionData.map((data) => (
            <Transaction 
              key={data.id}
              title={data.title}
              amount={data.amount}
              description={data.description}
            />
          ))}
        </div>
      ) : (
        <LoginMessage />
      )}
    </main>
  );
}

export default ProfilePage;
