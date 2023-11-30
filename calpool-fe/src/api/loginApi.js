const loginApi = async (email, password) => {
  const result = await fetch("http://localhost:5001/login", {
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