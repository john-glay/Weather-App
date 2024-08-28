import forecast from "./forecast.json";
import axios from "axios";

function getHourlyForecast() {
  const now = new Date();

  // Find the index of the forecast entry that corresponds to the nearest past 3-hour interval
  let startIndex = forecast.list.findIndex((singleData) => {
    const forecastDate = new Date(singleData.dt_txt);
    return (
      now >= forecastDate &&
      now < new Date(forecastDate.getTime() + 3 * 60 * 60 * 1000)
    );
  });

  // If startIndex is not found (unlikely), default to 0
  if (startIndex === -1) {
    startIndex = 0;
  }

  // Return the forecast starting from the nearest past 3-hour interval onwards
  return forecast.list.slice(startIndex, startIndex + 9);
}

function getDailyForecast() {
  const fiveDayForecast = forecast.list
    .filter((item) => {
      const time = item.dt_txt.split(" ")[1];
      return time === "00:00:00";
    })
    .slice(0, 5);

  return fiveDayForecast;
}

export { getHourlyForecast, getDailyForecast };

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export async function getWeatherData(location, measurementSystem) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=${measurementSystem}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAirQualityIndex(lat, lon) {
  const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
