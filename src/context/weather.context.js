import { DEFAULT_PLACE } from "../constants";
import { createContext, useEffect, useState } from "react";
import { getWeatherData, getAirQualityIndex } from "../api";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [airPollution, setAirPollution] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [cw, forecast, aqi] = await Promise.all([
          getWeatherData("weather", place.lat, place.lon, "metric"),
          getWeatherData("forecast", place.lat, place.lon, "metric"),
          getAirQualityIndex(place.lat, place.lon),
        ]);

        setCurrentWeather(cw);
        setWeatherForecast(forecast.list);
        setAirPollution(aqi.list);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [place]);

  return (
    <WeatherContext.Provider
      value={{
        place,
        loading,
        currentWeather,
        airPollution,
        weatherForecast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
