import React, { useState } from "react";
import { Button } from "../../components";
import { Link } from "@mui/material";
import './PictureUpload.css'

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = React.createRef();

  const handleChange = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO
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

  return (
    <div className="container">
      <h1 className="header">Welcome, {}</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div
          className={`circle ${isDragOver ? "drag-over" : ""}`}
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
        </div>
        <Button type='submit' color='primary' loading={false} disabled={disabled}>Next</Button>
        <Link
          href=""
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

export default ImageUpload;
