import React, { useState } from "react";
import { Button, TextInput } from "../../components";
import { Link } from "@mui/material";
import "./Login.css";
import { handleFormChange, validateFormLogin } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import loginApi from "../../api/loginApi";
import Loading from "../../components/Loading/Loading";

const Login = () => {
  const [form, setForm] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isFormValid = validateFormLogin(form, setForm);
    if (isFormValid) {
      const loginResult = await loginApi(form.email.value, form.password.value);
      if (loginResult.error === "User not found") {
        setForm({ ...form, email: { ...form.email, error: "User not found" } });
      } else if (loginResult.error === "Incorrect password") {
        setForm({
          ...form,
          password: { ...form.password, error: "Incorrect password" },
        });
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="container fade-in">
      <h1 className="header">CalPool</h1>
      <div className="header-container">
        <h1 className="sign-in-text">Sign In</h1>
        <Link
          href="/signup"
          underline="hover"
          variant="body2"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          Create Account
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <TextInput
          type="text"
          error={form.email.error}
          placeholder="Email"
          name="email"
          onChange={(event) => handleFormChange(event, setForm)}
          value={form.email.value}
        />
        <TextInput
          type="password"
          error={form.password.error}
          placeholder="Password"
          name="password"
          onChange={(event) => handleFormChange(event, setForm)}
          value={form.password.value}
        />
        <Button type="submit" color="primary" loading={false}>
          Sign In
        </Button>
      </form>
      <Link
        href=""
        underline="hover"
        variant="body2"
        color="secondary"
        sx={{ fontWeight: "bold" }}
      >
        Forgot Password?
      </Link>
    </div>
  );
};

export default Login;
