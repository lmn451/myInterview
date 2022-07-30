import { useParams } from "react-router-dom";
import { generateGetByIDQuery } from "../api";
import { useFetch } from "../hooks/useFetch";
import { IdResponse, Image } from "../types";

const GifInfo = () => {
  let { gifID } = useParams();
  const { error, loading, data } = useFetch<IdResponse>(
    generateGetByIDQuery(gifID)
  );
  return (
    <>
      <h2>Gif: {gifID}</h2>
      {data && (
        <ol>
          {Object.entries(data.images).map(([id, image]: [string, Image]) => (
            <li key={id}>
              <h3>{id}</h3>
              <h4>Width: {image.width}</h4>
              <h4>Height: {image.height}</h4>
              <img src={image.url} alt={"gif"}></img>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default GifInfo;
