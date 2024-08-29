import Header from "./Header";
import Footer from "./Footer";
import Highlights from "./Highlights";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import MainLoader from "../loader/MainLoader";
import WeatherContext from "../context/weather.context";
import { useContext } from "react";
import "../styles/components/Main.scss";

function getHourlyForecast(forecast) {
  const now = new Date();

  // Find the index of the forecast entry that corresponds to the nearest past 3-hour interval
  let startIndex = forecast.findIndex((singleData) => {
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
  return forecast.slice(startIndex, startIndex + 9);
}

function getDailyForecast(forecast) {
  const fiveDayForecast = forecast
    .filter((item) => {
      const time = item.dt_txt.split(" ")[1];
      return time === "00:00:00";
    })
    .slice(0, 5);

  return fiveDayForecast;
}

function Main() {
  const { loading, currentWeather, airPollution, weatherForecast, units } =
    useContext(WeatherContext);
  const hourlyForecastData = getHourlyForecast(weatherForecast);
  const dailyForecastData = getDailyForecast(weatherForecast);

  return (
    <div className="Main">
      <Header />
      {loading ? (
        <MainLoader />
      ) : (
        <>
          <Highlights
            currentWeather={currentWeather}
            airPollution={airPollution}
            units={units}
          />
          <HourlyForecast data={hourlyForecastData} units={units} />
          <DailyForecast data={dailyForecastData} units={units} />
        </>
      )}
      <hr />
      <Footer />
    </div>
  );
}

export default Main;
