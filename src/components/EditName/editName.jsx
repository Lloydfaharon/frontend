import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './editName.css';

function EditName() {
  const [editMode, setEditMode] = useState(false);
  const { firstName, userName, lastName } = useSelector((state) => state.user);
  const [editedUserName, setEditedUserName] = useState(userName);

  const handleUserNameChange = (event) => {
    setEditedUserName(event.target.value);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedUserName(userName);
  };

  const handleSave = () => {
    setEditMode(false);
    // Ici, tu enverrais les données au backend pour les sauvegarder
  };

  return (
    <div className="tete">
      {editMode ? (
        <>
          <h1>Edit user info<br /></h1>
          <div className='input-group'>
            <label htmlFor="userName">User name:</label>
            <input type="text" value={editedUserName} onChange={handleUserNameChange} />
          </div>

          <div className='input-group'>
            <label htmlFor="firstName">First name:</label>
            <input type="text" value={firstName} disabled />
          </div>

          <div className='input-group'>
            <label htmlFor="lastName">Last name:</label>
            <input label='LastName' type="text" value={lastName} disabled />
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
