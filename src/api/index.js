import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    return null;
  }
}

export async function getWeatherData(endpoint, lat, lon, measurementSystem) {
  const url = `${BASE_URL}/${endpoint}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${measurementSystem}`;
  return await fetchData(url);
}

export async function getAirQualityIndex(lat, lon) {
  const url = `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  return await fetchData(url);
}

export async function searchPlaces(text) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${API_KEY}`;
  return await fetchData(url);
}

export async function currentPlace(lat, lon) {
  const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`;
  return await fetchData(url);
}
