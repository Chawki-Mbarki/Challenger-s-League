import React, { useState } from 'react';
import { Input, Btn } from '../../components';
import styles from './RegisterForm.module.css';
import api from '../../config/axios'; // Make sure to import your axios instance
import Errr from '../../components/Errr/Errr';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar &&
      password.length >= 8
    );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    setError('');
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (username.length <= 2) {
      setError('Username must be longer than 2 characters.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!validatePassword(password)) {
      setError(
        'Password must contain at least one uppercase letter one lowercase letter, one number, one special character, and be at least 8 characters long.'
      );
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await api.post('/register', { username, email, password });
      localStorage.setItem('token', response.data.token); // Store token in local storage
      console.log('Registration successful:', response.data);
    } catch (error) {
      setError(error.response?.data || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <Input
        type="text"
        ID="username"
        label="Username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <Input
        type="password"
        ID="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Btn
        type="button"
        style="primary"
        text="Sign Up"
        onClick={handleRegister}
      />
      {error && <Errr error={error} />}
    </div>
  );
};

export default RegistrationForm;