import { useState } from "react";
import SignUp from "../SignUp/SignUp";
import InputUserInfo from "../InputUserInfo/InputUserInfo";
import PictureUpload from "../PictureUpload/PictureUpload";
const SignUpParent = () => {
  const [form, setForm] = useState({
    firstName: { value: "", error: "" },
    lastName: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    number: { value: "", error: "" },
    major: { value: "", error: "" },
    gender: { value: "", error: "" },
    grad_year: { value: 2023, error: "" },
  });
  const [page, setPage] = useState("signup");

  return (
    <>
      {page === "signup" && <SignUp form={form} setForm={setForm} setPage={setPage} />}
      {page === 'userinfo' && <InputUserInfo form={form} setForm={setForm} setPage={setPage}/>}
      {page === 'picture' && <PictureUpload form={form} setForm={setForm} setPage={setPage}/>}
  </>
  );
};

export default SignUpParent;