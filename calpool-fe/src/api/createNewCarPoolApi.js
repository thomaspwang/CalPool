const createNewCarPoolApi = async ({depart, arrive, range, pickup, destination, people, comments}) => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const result = await fetch(backendUrl + "create_trip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        depart: depart.format("MM/DD/YY HH:mm"),
        arrive: arrive.format("MM/DD/YY HH:mm"),
        lower_bound: range[0],
        upper_bound: range[1],
        pickup: pickup,
        destination: destination,
        people: people,
        comments: comments,
      }),
      credentials: 'include',
    });
    const resultJson = await result.json()
    const resultStatus = result.status
    return {resultJson, resultStatus}
  }
  
  export default createNewCarPoolApi;