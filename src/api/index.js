import currentWeather from "./current-weather.json";
import airPollution from "./air-pollution.json";

function getCurrentWeather() {
  return currentWeather;
}

function getAirPollution() {
  return airPollution;
}

export { getCurrentWeather, getAirPollution };
