import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8000/adduser', { Username, password });

      if (response.status === 201) {
        // Assuming response.data holds the user information
        if (response.data && response.data.userCreated) {
          // Use the navigate function to redirect to the Dashboard after successful signup
          navigate('/');
          setSignupMessage('Signup successful');
        } else {
          setSignupMessage('Error during signup');
        }
      } else {
        setSignupMessage('Error during signup');
        navigate('/');
      }
    } catch (error) {
      console.error(error.response);
      setSignupMessage('Error during signup');
    }
  };

  return (
    <div className='auth'>
      <h1>Sign Up</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
      <p>{signupMessage}</p>
      <div className='Login'>
        <Link to="/">Login</Link>
      </div>
    </div>

  );
};

export default Signup;
