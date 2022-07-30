import { useEffect, useState } from "react";

function useFetch<T = unknown>(queryUrl: string | undefined) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!queryUrl) return;
    setLoading(true);
    fetch(queryUrl)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [queryUrl]);

  return { error, loading, data };
}

export { useFetch };
