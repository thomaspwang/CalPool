const userContextAPI = async () => {
    const result = await fetch("http://localhost:5001/get_id", {
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
  