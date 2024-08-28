import Header from "./Header";
import Footer from "./Footer";
import Highlights from "./Highlights";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import MainLoader from "../loader/MainLoader";
import WeatherContext from "../context/weather.context";
import { useContext } from "react";
import "../styles/components/Main.scss";

function Main() {
  const { loading, currentWeather, airPollution } = useContext(WeatherContext);

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
          />
          <HourlyForecast />
          <DailyForecast />
        </>
      )}
      <hr />
      <Footer />
    </div>
  );
}

export default Main;
