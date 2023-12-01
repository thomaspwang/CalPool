const userContextAPI = async () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const result = await fetch(backendUrl + "get_id", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    });
    const resultStatus = await result.json();
    return resultStatus;
  };
  
  export default userContextAPI;
  