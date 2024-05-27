import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genre, error } = useGenres();
  return (
    <>
      <ul>
        {genre.map((gen) => (
          <li key={gen.id}>{gen.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
