import currentWeather from "./current-weather.json";
import airPollution from "./air-pollution.json";
import forecast from "./forecast.json";

function getCurrentWeather() {
  return currentWeather;
}

function getAirPollution() {
  return airPollution;
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

export { getCurrentWeather, getAirPollution, getDailyForecast };
