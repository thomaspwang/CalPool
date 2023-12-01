const viewCarpoolsApi = async () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  console.log(backendUrl)
  const result = await fetch(backendUrl + "get_all_calpools", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const resultJson = await result.json();
  const resultStatus = result.status;
  return { resultJson, resultStatus };
};
export default viewCarpoolsApi;
