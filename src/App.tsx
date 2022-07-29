import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { debounce } from "lodash";
import { useGiphyFetch } from "./hooks/useFetch";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [waiting, setWaiting] = useState(false);

  const [query, setQuery] = useState("");

  const { error, loading, data } = useGiphyFetch(query);
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
                <a href={gifInfo.url} target="_blank" rel="noreferrer">
                  <img
                    src={gifInfo.images.downsized.url}
                    width={100}
                    height={100}
                    alt="gif"
                  />
                </a>
              </li>
            ))}
          </ol>
        ))
      )}
    </div>
  );
}

export default App;
