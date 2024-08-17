import "../styles/components/Weather.scss";
import WeatherIcon from "./WeatherIcon";

function Weather() {
  const icon = "10d";

  return (
    <div className="Weather">
      <WeatherIcon icon={icon} />
      <div>
        <p className="temperature">
          99<span>°C</span>
        </p>
        <div className="description">Moderate Rain</div>
      </div>
    </div>
  );
}

export default Weather;
