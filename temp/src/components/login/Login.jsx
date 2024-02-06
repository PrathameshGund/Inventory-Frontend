import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', { Username, password });

      if (response.status === 200) {
        // Assuming response.data.Userdata holds the user information
        if (response.data) {
          // Use the navigate function to redirect to the Dashboard
          navigate('/Dashboard');
        }
        setLoginMessage('Login successful');
      } else {
        setLoginMessage('User not found');
      }
    } catch (error) {
      console.error(error.response);
      setLoginMessage('Error during login');
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
              type="text"
              value={Username}
              onChange={(e)=> setUsername(e.target.value)}
              name="username"
              id="username"
              autoComplete="off"
              placeholder="Username"
              required={true}
            />
        </label>
        <br />
        <label>
          Password:
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              placeholder="Password"
              required={true}
            />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>{loginMessage}</p>
      <div className='Signup'>
      <Link to="/Signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
