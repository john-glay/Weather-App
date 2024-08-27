import currentWeather from "./current-weather.json";
import airPollution from "./air-pollution.json";
import forecast from "./forecast.json";

function getCurrentWeather() {
  return currentWeather;
}

function getAirPollution() {
  return airPollution;
}

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

export {
  getCurrentWeather,
  getAirPollution,
  getHourlyForecast,
  getDailyForecast,
};
