import { useEffect, useState } from "react";
import { generateSearchQuery } from "../api";
import { Datum, RootObject } from "../types";

export const useGiphyFetch = (query: string) => {
  const [data, setData] = useState<Datum[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(generateSearchQuery(query))
      .then((res) => res.json())
      .then((res: RootObject) => setData(res.data))
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [query]);

  return { error, loading, data };
};
