// Updated Signin Component
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context';
import './Common.css'; 

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Incorrect email or password');
      }

      const { token } = await response.json();
      login(token);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="signup-container">
      <img src="https://www.jiocloud.com/l/?u=QXnR7_rdmKktrH1Zd3yUPBfW_zJQ70z-RCJJTcz2On2la6aMsu7aodMPgqGrltrC8BX" alt="Spotify Logo" className="spotify-logo" />
      <h2 className="signup-title">Sign In</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">Sign In</button>
      </form>
      <button className="signin-redirect-button" onClick={handleSignupRedirect}>
        Don't have an account? Sign Up
      </button>
    </div>
  );
}

export default Signin;
