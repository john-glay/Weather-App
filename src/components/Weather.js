import WeatherIcon from "./WeatherIcon";
import "../styles/components/Weather.scss";

function Weather({ data, units }) {
  const { temp } = data.main;
  const { description, icon } = data.weather[0];

  return (
    <div className="Weather">
      <WeatherIcon icon={icon} description={description} />
      <div>
        <p className="temperature">
          {Math.ceil(temp)}
          <span>{units.temperature}</span>
        </p>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default Weather;
