import { useEffect, useState } from "react";

export const useGetData = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const links = JSON.parse(localStorage.getItem("links"));
    if (links) {
      setData(links);
    }
  }, []);

  const getData = async (link) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      const json = await response.json();

      if (!response.ok) {
        if (json.error_code === 1) {
          throw Error("Please add a link.");
        }
        if (json.error_code === 2) {
          throw Error("This is not a valid URL.");
        }
        throw Error("Please try again.");
      }

      if (response.ok) {
        setIsLoading(false);
        setError(null);
        setData((prevData) => {
          localStorage.setItem(
            "links",
            JSON.stringify([json.result, ...prevData])
          );
          return [json.result, ...prevData];
        });
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return { data, isloading, error, getData };
};
