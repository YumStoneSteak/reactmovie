import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieProps } from "../components/Movie";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieProps | null>(null);

  const getMovie = async () => {
    try {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();

      setMovie(json.data.movie);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <>
      <h1>Detail</h1>
      <div>
        {movie ? (
          <>
            <h2>{movie.title}</h2>
            <p>{movie.description_full}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};
export default Detail;
