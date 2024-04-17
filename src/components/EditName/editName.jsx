import React, { useState } from 'react';
import './editName.css'; 

function EditName() {
  const [editMode, setEditMode] = useState(false);
  const [userName, setUserName] = useState('TJav');
  const [firstName, setFirstName] = useState('Tony');
  const [lastName, setLastName] = useState('Jarvis');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };  
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleCancel = () => {
    setEditMode(false);
    // Optionnel: réinitialiser le nom à la dernière valeur sauvegardée si nécessaire
  };

  const handleSave = () => {
    setEditMode(false);
    // Ici tu enverrais les données au backend pour les sauvegarder
  };

  return (
    <div className="tete">
      
      {editMode ? (
        <>
          <h1>Edit user info<br /></h1>
          <div className='input-group'>
            <label htmlFor="userName">User name:</label>
            <input type="text" value={userName} onChange={handleUserNameChange} />
          </div>

          <div className='input-group'>
            <label htmlFor="firstName">First name:</label>
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
          </div>

          <div className='input-group'>
            <label htmlFor="lastName">Last name:</label>
            <input label='LastName' type="text" value={lastName} onChange={handleLastNameChange} />
          </div>
          
          <div className='button-edit'>
            <button className='edit-button-info' onClick={handleSave}>Save</button>
            <button className='edit-button-info' onClick={handleCancel}>Cancel</button>
          </div>
          
        </>
      ) : (
        <>
          <h1>Welcome back<br /></h1>
          <h2>{firstName} {lastName}</h2>
          <button className="edit-button" onClick={() => setEditMode(true)}>Edit Name</button>
        </>
      )}
    </div>
  );
}

export default EditName;
