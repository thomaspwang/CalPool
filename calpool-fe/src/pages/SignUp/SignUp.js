import React, { useState } from "react";
import { Button, TextInput } from "../../components";
import { Link } from "@mui/material";
import { validateFormSignUp, handleFormChange } from "../../utils/utils";
import "./SignUp.css";

const SignUp = ({ form, setForm, setPage}) => {
  const [showPass, setShowPass] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = validateFormSignUp(form, setForm)
    if (isFormValid) {
      setPage('userinfo')
    }
  }

  const toggleShow = () => {
    setShowPass(!showPass)
  }

  return (
    <div className="container fade-in">
      <h1 className="header">CalPool</h1>
      <div className="header-container">
        <h1 className="create-account-text">Create Account</h1>
        <Link
          href="/login"
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
        <TextInput type='text' error={form.firstName.error} placeholder="First name" name='firstName' onChange={(event) => handleFormChange(event, setForm)} value={form.firstName.value}/>
        <TextInput type='text' error={form.lastName.error} placeholder="Last name" name='lastName' onChange={(event) => handleFormChange(event, setForm)} value={form.lastName.value}/>
      </div>
      <TextInput type='text' error={form.email.error} placeholder="Email" name='email' onChange={(event) => handleFormChange(event, setForm)} value={form.email.value}/>
      <div className="password">
      <TextInput type={showPass ? 'text' : 'password'} pr='50px' error={form.password.error} placeholder="Password" name='password' onChange={(event) => handleFormChange(event, setForm)} value={form.password.value}/>
      <h1 className="show-button" onClick={toggleShow}>show</h1>
      </div>
      <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
};

export default SignUp;
