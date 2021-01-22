import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConstant = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortConstant.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error(
              "Couldn't fetch data from the server. Incorrect URL might be a reason...Try Again!!"
            );
          }
          return res.json();
        })
        .then((data) => {
          //console.log(data);
          setData(data);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setLoading(false);
            setError(err.message);
          }
        });
    }, 500);
    return () => abortConstant.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
