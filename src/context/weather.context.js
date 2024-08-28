import { createContext, useEffect, useState } from "react";
import { DEFAULT_PLACE } from "../constants";
import { getWeatherData, getAirQualityIndex } from "../api";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [airPollution, setAirPollution] = useState([]);
  // const [forecast, setForecast] = useState([]);

  useEffect(() => {
    async function _getWeatherData() {
      setLoading(true);

      const cw = await getWeatherData(place.name, "metric");
      setCurrentWeather(cw);

      setLoading(false);
    }
    _getWeatherData();

    async function _getAirQualityIndex() {
      setLoading(true);

      const aqi = await getAirQualityIndex(place.lat, place.lon);
      setAirPollution(aqi);

      setLoading(false);
    }
    _getAirQualityIndex();
  }, [place]);

  return (
    <WeatherContext.Provider
      value={{ place, loading, currentWeather, airPollution }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
