import React, { useState } from 'react';

import './Profile.css';
import { Input } from '../../components';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    position: 'Software Engineer',
    role: 'Developer',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', user);
  };

  return (
    <div className='profileContainer'>
      <h2 className='profileTitle'>User Profile</h2>
      <form onSubmit={handleSubmit} className='profileForm'>
        <Input
          label={true}
          labelText='Full Name'
          id='name'
          type='text'
          value={user.name}
          onChange={handleChange}
          placeholder='Enter your full name'
          required={true}
        />
        <Input
          label={true}
          labelText='Email'
          id='email'
          type='email'
          value={user.email}
          onChange={handleChange}
          placeholder='Enter your email address'
          required={true}
        />
        <Input
          label={true}
          labelText='Phone Number'
          id='phoneNumber'
          type='tel'
          value={user.phoneNumber}
          onChange={handleChange}
          placeholder='Enter your phone number'
          required={true}
        />
        <Input
          label={true}
          labelText='Position'
          id='position'
          type='text'
          value={user.position}
          onChange={handleChange}
          placeholder='Enter your position'
          required={true}
        />
        <Input
          label={true}
          labelText='Role'
          id='role'
          type='text'
          value={user.role}
          onChange={handleChange}
          placeholder='Enter your role'
          required={true}
        />
        <button type='submit' className='submitButton'>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
