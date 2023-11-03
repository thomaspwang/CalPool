import React, { useState } from "react";
import { Button, TextInput } from "../../components";
import { Link } from "@mui/material";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({
      email: { value: "", error: "" },
      password: { value: "", error: "" },
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm(prev => ({...prev, [name]: {value: value, error: ""}}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = validateForm()
    if (isFormValid) {
      //TODO
    }
  }

  const validateForm = () => {
    let isValid = true;
    const updatedState = {
      ...form,
      email: { ...form.email, error: "" },
      password: { ...form.password, error: "" },
    };
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    if (!validateEmail(updatedState.email.value)) {
      updatedState.email.error = 'only-outline';
      isValid = false;
    }
  
    if (!updatedState.password.value.length) {
      updatedState.password.error = 'only-outline';
      isValid = false;
    }
    !isValid && setForm(updatedState);
  
    return isValid;
  };

  return (
    <div className="container">
      <h1 className="header">CalPool</h1>
      <div className="header-container">
        <h1 className="sign-in-text">Sign In</h1>
        <Link
          href=""
          underline="hover"
          variant="body2"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          Create Account
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="form">
      <TextInput type='text' error={form.email.error} placeholder="Email" name='email' onChange={handleFormChange} value={form.email.value}/>
      <TextInput type='password' error={form.password.error} placeholder="Password" name='password' onChange={handleFormChange} value={form.password.value}/>
      <Button type="submit" width="100%">Sign In</Button>
      </form>
      <Link
          href=""
          underline="hover"
          variant="body2"
          color="#777777"
          sx={{ fontWeight: "bold" }}
        >
          Forgot Password?
        </Link>
    </div>
  );
};

export default Login;
