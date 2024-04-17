// EditUserName.js
import React, { useState } from 'react';
import './editUserName.css'; // Assure-toi que le chemin est correct

function EditUserName({ currentName, onSave }) {
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState(currentName.split(' ')[0]);
  const [lastName, setLastName] = useState(currentName.split(' ')[1]);

  const handleSave = () => {
    onSave(`${firstName} ${lastName}`);
    setEditMode(false);
  };

  return (
    <div className="edit-user-name">
      {editMode ? (
        <div className="form-edit-name">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div className="display-name">
          <h2>{currentName}</h2>
          <button onClick={() => setEditMode(true)}>Edit Name</button>
        </div>
      )}
    </div>
  );
}

export default EditUserName;
