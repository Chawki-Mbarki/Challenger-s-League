import React, { useState } from 'react';
import { Input, Btn } from '../../components';
import styles from './LoginForm.module.css';
import api from '../../config/axios'; // Import your axios instance

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await api.post('/login', { email, password });
      localStorage.setItem('token', response.data.token); // Store token in local storage
      console.log('Login successful:', response.data);
    } catch (error) {
      setError(error.response?.data || 'Login failed. Please try again.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <Input
        type="email"
        ID="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        ID="password"
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Btn
        type="button"
        style="primary"
        text="Sign In"
        onClick={handleLogin}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default LoginForm;
