import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Summary = styled.p`
  text-overflow: ellipsis;
`;

export interface MovieProps {
  id: string;
  coverImg?: string;
  title?: string;
  summary: string;
  genres: string[];
  medium_cover_image?: string;
  description_full?: string;
}

const Movie: React.FC<MovieProps> = (props) => {
  const { id, coverImg, title, summary, genres } = props;
  return (
    <div key={id}>
      <img src={coverImg} alt="coverImg"></img>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <Summary>{summary}</Summary>
      <ul>
        {genres?.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
