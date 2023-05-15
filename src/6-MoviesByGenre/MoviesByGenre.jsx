import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function MoviesByGenre() {
  const [moviesData, setMoviesData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setMoviesData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/movies");
  }, []);

  const filteredMovies =
    selectedGenre === "all"
      ? moviesData
      : moviesData.filter(({ genre }) => genre === selectedGenre);

  const handleSelectedGenre = (e) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <div>
      <h2>Movies</h2>
      <div>
        Movies By Genre:{" "}
        <select onChange={handleSelectedGenre}>
          <option value="all">All</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
      </div>
      <ul>
        {filteredMovies.map(({ title, year, genre }) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>
              <b>Year: </b>
              {year}
            </p>
            <p>
              <b>Genre: </b>
              {genre}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
