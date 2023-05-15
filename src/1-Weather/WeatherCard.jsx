import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function WeatherCard() {
  const [weatherData, setWeatherData] = useState({});
  const [isCelsius, setIsCelsius] = useState(true);

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setWeatherData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/weather");
  }, []);

  const { temperature, humidity, windSpeed } = weatherData;
  const temperatureScale = isCelsius
    ? `${temperature}℃`
    : `${(temperature * 9) / 5 + 32}℉`;

  return (
    <div>
      <div>
        <h2>Weather</h2>
        <p>Temperature: {temperatureScale}</p>
        <p>Humidity: {humidity}%</p>
        <p>WindSpeed: {windSpeed} km/h</p>
      </div>
      <div>
        <button onClick={() => setIsCelsius(!isCelsius)}>
          Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
        </button>
      </div>
    </div>
  );
}
