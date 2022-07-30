import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import { useFetch } from "./../hooks/useFetch";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { generateSearchQueryURL } from "../api";
import { Datum } from "../types";

function Index() {
  const [waiting, setWaiting] = useState(false);

  const [query, setQuery] = useState("");

  const { error, loading, data } = useFetch<Datum[]>(
    generateSearchQueryURL(query)
  );
  const debounced = debounce((e: any) => {
    setQuery(e.target.value);
    setWaiting(false);
  }, 3000);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for gif"
        onChange={(e) => {
          setWaiting(true);
          debounced(e);
        }}
      />
      {waiting || loading ? (
        <Skeleton />
      ) : (
        (error && "OOps") ||
        (data && (
          <ol>
            {data.map((gifInfo) => (
              <li key={gifInfo.id}>
                <Link to={`/${gifInfo.id}`}>
                  <img
                    src={gifInfo.images.downsized.url}
                    width={100}
                    height={100}
                    alt="gif"
                  />
                </Link>
              </li>
            ))}
          </ol>
        ))
      )}
    </div>
  );
}

export default Index;
