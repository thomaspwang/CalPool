const signupApi = async (
  email,
  password,
  first_name,
  last_name,
  gender,
  phone_number,
  graduation_year,
  major
) => {
  const result = await fetch("http://localhost:5001/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      phone_number: phone_number,
      graduation_year: graduation_year,
      major: major,
    }),
  });
  const resultStatus = await result.json();
  return resultStatus;
};

export default signupApi;
