import React, { useState } from "react";
import { Input, Btn, Flag } from "../../components";
import Styles from "./LoginForm.module.css";
import { loginUser } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      const response = await loginUser({ email, password });
      if (response?.token) {
        localStorage.setItem("token", response.token);
        navigate("/Dashboard");
      } else {
        setError("Login failed. No token received.");
      }
    } catch (error) {
      setError(
        error.response?.data?.error ||
          error.details ||
          "Login failed. Please try again."
      );
      console.error(`Error accured while logging in: ${error.response?.data?.details}`)
    }
  };

  return (
    <div className={Styles.formContainer}>
      <form action="#" className="flex column center" style={{ gap: 12 }}>
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
          STYL="primary"
          text="Sign In"
          btnClick={handleLogin}
        />
      </form>
      {error && <div className={Styles.error}><Flag type="error" text={error} /></div>}
    </div>
  );
};

export default LoginForm;
