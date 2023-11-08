import React, { useEffect, useState } from "react";
import Movie, { MovieProps } from "../components/Movie";
import { styled, keyframes } from "styled-components";

const ani = keyframes`
from{
  transform: rotate(0deg);
  border-radius: 0px;
}
50%{
  border-radius: 100px;
}
to {  
  transform: rotate(360deg);
  border-radius: 0px;
}
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  margin: auto;
  margin-top: 400px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${ani} 3s linear infinite;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );

    const json = await response.json();
    setMovies(json.data.movies);

    if (json.data.movies) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <Title>loading...</Title>
      ) : (
        <div>
          {/* <Box></Box> */}
          {movies.map((movie, index) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            ></Movie>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default Home;
