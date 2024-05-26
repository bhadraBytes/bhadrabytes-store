import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();
  useEffect(() => {
    makeApiCall();
  }, [endpoint]);

  const makeApiCall = async () => {
    console.log("API endpoint hit:", endpoint);
    const res = await fetchDataFromApi(endpoint);
    setData(res);
  };

  return { data };
};

export default useFetch;
