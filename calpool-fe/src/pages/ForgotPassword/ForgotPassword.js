import React, { useState } from "react";
import { TextInput, Button } from "../../components";
import { validateEmail, handleFormChange } from "../../utils/utils";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [form, setForm] = useState({ email: { value: "", error: "" } });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(form.email.value)) {
      setForm({...form, email: {...form.email, error: "Please enter a valid email"}});
    }
    else {
        //TODO send email
    }
  };
  return (
    <div className="container">
      <h1 className="header">CalPool</h1>
      <div className="heading-text">
        Enter your email to and we'll send you a recovery code to reset your
        password
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <TextInput
          type="text"
          error={form.email.error}
          placeholder="Email"
          name="email"
          onChange={(event) => handleFormChange(event, setForm)}
          value={form.email.value}
        />
        <Button
          type="submit"
          color="primary"
          loading={false}
          disabled={!form.email.value}
        >
          Continue
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
