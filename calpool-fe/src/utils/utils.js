const handleFormChange = (event, setForm) => {
  const { name, value } = event.target;
  setForm((prev) => ({ ...prev, [name]: { value: value, error: "" } }));
};

const isInt = (number) => {
  const intRegex = /^[0-9]\d*$/;
  return intRegex.test(number);
}

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

const validateFormSignUp = (form, setForm) => {
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

  const validateFormLogin = (form, setForm) => {
    let isValid = true;
    const updatedState = {
      ...form,
      email: { ...form.email, error: "" },
      password: { ...form.password, error: "" },
    };
  
    if (!validateEmail(updatedState.email.value)) {
      updatedState.email.error = 'Please enter a valid email address';
      isValid = false;
    }
  
    !isValid && setForm(updatedState);
  
    return isValid;
  };

  const validateFormUserInfo = (form, setForm) => {
    let isValid = true;
    const updatedState = {
      ...form,
      number: { ...form.number, error: "" },
      major: { ...form.major, error: "" },
      gender: { ...form.gender, error: "" },
      grad_year: { ...form.grad_year, error: "" },
    };
    if (!isInt(updatedState.number.value)) {
      updatedState.number.error = 'Please enter a valid phone number using only digits';
      isValid = false;
    }
    if (!updatedState.major.value.trim()) {
      updatedState.major.error = 'Please enter your major';
      isValid = false;
    }
    if (!updatedState.gender.value) {
      updatedState.gender.error = 'Please input your gender';
      isValid = false;
    }

    !isValid && setForm(updatedState);
  
    return isValid;
  }

  const handleKeyDownVerify = (event, code, setCode, inputRefs, setWrong) => {
    const value = event.key;
    const index = parseInt(event.target.name);
    if (/^\d$/.test(value)) {
      setWrong(false);
      if (code[index]) {
        event.preventDefault();
      }
      const updatedCode = [...code];
      updatedCode[index] = value;
      console.log(updatedCode);
      setCode(updatedCode);
      if (index < inputRefs.length - 1) {
        event.preventDefault();
        inputRefs[index + 1].current.focus();
        inputRefs[index + 1].current.select();
      }
    } else if (value === "Backspace") {
      if (!code[index] && index > 0) {
        const updatedCode = [...code];
        updatedCode[index - 1] = "";
        setCode(updatedCode);
        inputRefs[index - 1].current.focus();
        inputRefs[index - 1].current.select();
      } else if (code[index]) {
        const updatedCode = [...code];
        updatedCode[index] = "";
        setCode(updatedCode);
      }
    } else if (value === "ArrowLeft") {
      event.preventDefault();
      if (index > 0) {
        inputRefs[index - 1].current.focus();
        inputRefs[index - 1].current.select();
      }
    }
  };

  const handlePasteVerify = (event, setWrong, code, inputRefs, setCode) => {
    event.preventDefault();
    const index = parseInt(event.target.name);
    const pasteData = event.clipboardData.getData("text");
    const digits = pasteData.split("").filter((char) => /^\d$/.test(char));

    if (digits.length > 0) {
      setWrong(false);
      const updatedCode = [...code];
      for (let i = index; i < inputRefs.length; i++) {
        if (digits[i - index]) {
          updatedCode[i] = digits[i - index];
        }
      }
      setCode(updatedCode);

      const nextInput = inputRefs.find(
        (ref, i) => i > index && !updatedCode[i]
      );
      if (nextInput) {
        nextInput.current.focus();
        nextInput.current.select();
      }
    }
  };


export { handleFormChange, validateFormSignUp, validateFormLogin, validateFormUserInfo, handleKeyDownVerify, handlePasteVerify, validateEmail};
