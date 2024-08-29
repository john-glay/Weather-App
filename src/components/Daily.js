import WeatherIcon from "./WeatherIcon";
import "../styles/components/Daily.scss";

function Daily({ singleData, units }) {
  const { icon, description } = singleData.weather[0];
  const { temp, feels_like } = singleData.main;
  const date = new Date(singleData.dt_txt);

  const optionsDate = {
    day: "2-digit",
    month: "short",
    weekday: "short",
  };

  const formattedDate = date.toLocaleDateString("en-US", optionsDate);

  return (
    <div className="Daily">
      <div className="daily-weather">
        <WeatherIcon icon={icon} description={description} />
        <div className="daily-temp">
          {Math.ceil(temp)}
          {units.temperature}
          <span className="span">
            {Math.ceil(feels_like)}
            {units.temperature}
          </span>
        </div>
      </div>
      <div className="daily-date">{formattedDate}</div>
    </div>
  );
}

export default Daily;
