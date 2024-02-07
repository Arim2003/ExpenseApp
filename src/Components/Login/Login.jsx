import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    nav('/home')
   if (username.trim() === "Jaasim" && password.trim() === "Jaas" || username.trim() === "Arthi" && password.trim() === "Arim_32") {
        alert(`Welcome! yuhh have successfully login, ${username}!`);
      } else {
        alert('Invalid username or password. Please try again.');
        //
        nav('/et');
      }
  
    // Perform authentication logic here
    // You can use a backend service or authentication library
    // For simplicity, let's assume successful login for any input
    //const user = { username, isAuthenticated: true };
    //onLogin(user);*/
  };
 /* const handleSignUp=()=>{
   nav('/sign');
  };*/

  return (
    <div className="login-container">
      <h2>Login to Family Expenses</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
        <button type="button" onClick={()=> nav('/sign')}>SignUp</button>
      </form>
    </div>
  );
};

export default Login;