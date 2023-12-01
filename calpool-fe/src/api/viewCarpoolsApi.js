const viewCarpoolsApi = async () => {
  const result = await fetch("http://localhost:5001/get_all_calpools", {
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
