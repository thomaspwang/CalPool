import React, { useState } from "react";
import { Button, TextInput } from "../../components";
import { Link } from "@mui/material";
import "./SignUp.css";

const SignUp = () => {
  const [form, setForm] = useState({
      firstName: { value: "", error: "" },
      lastName: { value: "", error: "" },
      email: { value: "", error: "" },
      password: { value: "", error: "" },
  });

  const [showPass, setShowPass] = useState(false);

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
      firstName: { ...form.firstName, error: "" },
      lastName: { ...form.lastName, error: "" },
      email: { ...form.email, error: "" },
      password: { ...form.password, error: "" },
    };
  
    if (!updatedState.firstName.value.trim()) {
      updatedState.firstName.error = 'First name is required';
      isValid = false;
    }
  
    if (!updatedState.lastName.value.trim()) {
      updatedState.lastName.error = 'Last name is required';
      isValid = false;
    }
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    if (!validateEmail(updatedState.email.value)) {
      updatedState.email.error = 'Please enter a valid email address';
      isValid = false;
    }
  
    if (updatedState.password.value.length < 7) {
      updatedState.password.error = 'Password must be at least 7 characters long';
      isValid = false;
    }
    !isValid && setForm(updatedState);
  
    return isValid;
  };

  const toggleShow = () => {
    setShowPass(!showPass)
  }


  return (
    <div className="container">
      <h1 className="header">CalPool</h1>
      <div className="header-container">
        <h1 className="create-account-text">Create Account</h1>
        <Link
          href=""
          underline="hover"
          variant="body2"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          Sign In
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="form">
      <div className="name-container">
        <TextInput type='text' error={form.firstName.error} placeholder="First name" name='firstName' onChange={handleFormChange} value={form.firstName.value}/>
        <TextInput type='text' error={form.lastName.error} placeholder="Last name" name='lastName' onChange={handleFormChange} value={form.lastName.value}/>
      </div>
      <TextInput type='text' error={form.email.error} placeholder="Email" name='email' onChange={handleFormChange} value={form.email.value}/>
      <div className="password">
      <TextInput type={showPass ? 'text' : 'password'} pr='50px' error={form.password.error} placeholder="Password" name='password' onChange={handleFormChange} value={form.password.value}/>
      <h1 className="show-button" onClick={toggleShow}>show</h1>
      </div>
      <Button type="submit" width="100%">Create Account</Button>
      </form>
    </div>
  );
};

export default SignUp;
