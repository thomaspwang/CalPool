const loginApi = async (email, password) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const result = await fetch(backendUrl + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    credentials: 'include',
  });
  const resultStatus = await result.json()
  return resultStatus
}

export default loginApi;