import React, { useState } from 'react';
import './Signup.css'; // Import the associated CSS file
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const nav=useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSignUp = (e) => {
    //nav('/home')
    e.preventDefault();
    // Implement actual signup logic here
    if (userInfo.username && userInfo.email && userInfo.password && userInfo.confirmPassword) {
      if (userInfo.password === userInfo.confirmPassword) {
        //onSignUp(userInfo);
      } else {
        alert('Passwords do not match.');
      } 
    }else {
      alert('Please fill in all fields.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userInfo.email)) {
      alert('Invalid email syntax');
      //nav('/home')
      return; 
      //nav('/home')// Do not proceed with registration if email is invalid
    }
    nav('/home')

  };

  return (
    <div className="signup-page-container">
      <h1>Sign Up Page</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userInfo.username}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userInfo.password}
          onChange={handleInputChange}
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={userInfo.confirmPassword}
          onChange={handleInputChange}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;