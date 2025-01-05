import React, { useEffect, useState } from 'react';

import { Input } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail } from '../../redux/slices/AuthSlice';

import './Profile.css';

const Profile = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    designation: 'Software Engineer',
    department:'',
    role: 'Developer',
  });
  const getUser = async()=>{
    try {
      const res = await dispatch(getUserDetail());
      setUser({
        fullName: res.payload.fullName || '',
        email: res.payload.email || '',
        phoneNumber: res.payload.phoneNumber || '',
        designation: res.payload.designation || '',
        department: res.payload.department || '',
        role: res.payload.role || '',
      });
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', user);
  };
  useEffect(()=>{
    getUser();
  },[dispatch])

  return (
    <div className='profileContainer'>
      <h2 className='profileTitle'>User Profile</h2>
      <form onSubmit={handleSubmit} className='profileForm'>
        <Input
          label={true}
          labelText='Full Name'
          id='fullName'
          type='text'
          value={user.fullName}
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
          id='designation'
          type='text'
          value={user.designation}
          onChange={handleChange}
          placeholder='Enter your position'
          required={true}
          readOnly
        />
           <Input
          label={true}
          labelText='Department'
          id='department'
          type='text'
          value={user.department}
          onChange={handleChange}
          required={true}
          readOnly
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
          readOnly
        />
        <button type='submit' className='submitButton'>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
