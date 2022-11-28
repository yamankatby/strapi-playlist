import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error);
      }

      setIsloading(false);
    };

    fetchData();
  }, []);

  return { isLoading, error, data };
}
