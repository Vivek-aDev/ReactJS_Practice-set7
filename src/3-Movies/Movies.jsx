import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("all");

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setMoviesData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/movies");
  }, []);

  const filteredMovies =
    selectedYear === "all"
      ? moviesData
      : moviesData.filter(({ year }) => year === Number(selectedYear));

  const handleSelectedYear = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div>
      <h2>Movies</h2>
      <div>
        Filter By Year:
        <select onChange={handleSelectedYear}>
          <option value="all">All</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
        </select>
      </div>
      <ul>
        {filteredMovies.map(({ title, year, rating }) => (
          <li key={title + rating}>
            <div>
              <h3>Name: {title}</h3>
              <p>
                <b>Year: </b>
                {year}
              </p>
              <p>
                <b>Rating: </b>
                {rating}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
