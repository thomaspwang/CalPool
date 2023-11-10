const handleFormChange = (event, setForm) => {
    console.log(event)
  const { name, value } = event.target;
  setForm((prev) => ({ ...prev, [name]: { value: value, error: "" } }));
};

function validateEmail(email) {
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


export { handleFormChange, validateFormSignUp, validateFormLogin};
