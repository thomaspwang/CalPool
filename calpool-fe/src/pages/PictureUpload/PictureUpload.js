import React, { useEffect, useState } from "react";
import { Button } from "../../components";
import { Link } from "@mui/material";
import { validateFormSignUp, validateFormUserInfo } from "../../utils/utils";
import signupApi from '../../api/signupApi'
import './PictureUpload.css'
import { useNavigate } from "react-router-dom";

function PictureUpload({ form, setForm, setPage }) {
  const [image, setImage] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = React.createRef();
  const navigate = useNavigate()

  const handleChange = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isFormValid = validateFormSignUp(form, setForm) && validateFormUserInfo(form, setForm)
    if (isFormValid) {
      const signupResult = await signupApi(form.email.value, form.password.value, form.firstName.value, form.lastName.value,form.gender.value, form.number.value, form.grad_year.value, form.major.value)
      if (signupResult.error === 'This email is already registered.') {
        setPage('signup')
        setForm({...form, email: {...form.email, error: 'This email is already registered.'}})
      }
      else if (signupResult.error === 'Missing required fields') {
        setPage('signup')
      }
      else {
        navigate('/')
      }
    }
    else {
      setPage('signup')
    }
  }

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFile = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const disabled = !image ? true : false;

  useEffect(() => {
    if (!form.firstName.value || !form.number.value) {
      setPage('signup')
    }
  })

  return (
    <div className="container slide-in-right">
      <h1 className="header-pic">Welcome, {form.firstName.value}</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div
          className={`circle-signup ${isDragOver ? "drag-over" : ""}`}
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'contain'}}
        >
          <input
            type="file"
            onChange={handleChange}
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
          />
            {!image && <span className="circle-text">Upload Image</span>}
        </div>
        <Button type='submit' color='primary' loading={false} disabled={disabled}>Next</Button>
        <Link
          href=""
          onClick={handleSubmit}
          underline="hover"
          variant="body2"
          color="secondary"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
            Skip
        </Link>
      </form>
    </div>
  );
}

export default PictureUpload;
