import { createContext, useEffect, useState } from "react";
import { getWeatherData, getAirQualityIndex } from "../api";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEMS, UNITS } from "../constants";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [airPollution, setAirPollution] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [measurementSystem, setMeasurementSystem] = useState(
    MEASUREMENT_SYSTEMS.Celsius
  );
  const [units, setUnits] = useState({});

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const start = Date.now(); // Track the start time

      try {
        const [cw, forecast, aqi] = await Promise.all([
          getWeatherData("weather", place.lat, place.lon, measurementSystem),
          getWeatherData("forecast", place.lat, place.lon, measurementSystem),
          getAirQualityIndex(place.lat, place.lon),
        ]);

        setCurrentWeather(cw);
        setWeatherForecast(forecast.list);
        setAirPollution(aqi.list);
        setUnits(UNITS[measurementSystem]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        const duration = Date.now() - start;
        const minLoadingTime = 1000; // 1 second

        if (duration < minLoadingTime) {
          setTimeout(() => setLoading(false), minLoadingTime - duration);
        } else {
          setLoading(false);
        }
      }
    }

    fetchData();
  }, [place, measurementSystem]);

  return (
    <WeatherContext.Provider
      value={{
        place,
        loading,
        currentWeather,
        airPollution,
        weatherForecast,
        measurementSystem,
        setMeasurementSystem,
        units,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
