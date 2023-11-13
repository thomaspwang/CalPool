const handleFormChange = (event, setForm) => {
    console.log(event)
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


export { handleFormChange, validateFormSignUp, validateFormLogin, validateFormUserInfo};
