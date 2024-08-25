import WeatherIcon from "./WeatherIcon";
import { getCurrentWeather } from "../api";
import "../styles/components/Weather.scss";

function Weather() {
  const data = getCurrentWeather();
  const { temp } = data.main;
  const { description, icon } = data.weather[0];

  return (
    <div className="Weather">
      <WeatherIcon icon={icon} description={description} />
      <div>
        <p className="temperature">
          {Math.ceil(temp)}
          <span>°C</span>
        </p>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default Weather;
