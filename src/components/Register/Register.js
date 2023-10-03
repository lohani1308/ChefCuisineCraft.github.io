import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Check for empty fields
    if (!name || !email || !password || !photo) {
      newErrors.emptyFields = 'Please fill in all fields.';
    }

    // Check if email is valid
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.invalidEmail = 'Invalid email address.';
    }

    // Check password length
    if (password.length < 6) {
      newErrors.shortPassword = 'Password must be at least 6 characters.';
    }

    if (Object.keys(newErrors).length === 0) {
      // If no errors, you can submit the form or perform any necessary actions here
      console.log('Registration successful');
    } else {
      // Update the errors state to display error messages
      setErrors(newErrors);
    }
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  return (
    <div className="container"> {/* Add container class */}
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.invalidEmail && <div className="error">{errors.invalidEmail}</div>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.shortPassword && <div className="error">{errors.shortPassword}</div>}
          </div>
          <div className="form-group">
            <label className="photo-label">Upload Photo:</label>
            <label htmlFor="photo" className="upload-button">
              Choose File
            </label>
            <input
              type="file"
              id="photo"
              className="file-input"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </div>
          {photo && (
            <img src={URL.createObjectURL(photo)} alt="Selected" className="photo-preview" />
          )}
          {errors.emptyFields && <div className="error">{errors.emptyFields}</div>}
          <div className="button-container">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
