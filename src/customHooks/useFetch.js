import { useEffect, useState } from "react";

const useFetch = ({ url, shouldPreventFetchWhileInitialRender = false }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async ({ urlToFetch, onSuccessCallBack }) => {
    setIsLoading(true);
    setError("");
    try {
      let res = await fetch(urlToFetch);
      res = await res.json();
      setData(res?.data || res?.items);
      onSuccessCallBack && onSuccessCallBack(res?.data || res?.items);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!shouldPreventFetchWhileInitialRender) {
      fetchData({ urlToFetch: url });
    }
  }, []);

  return { fetchData, data, error, isLoading };
};

export default useFetch;
