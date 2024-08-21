import WeatherIcon from "./WeatherIcon";
import "../styles/components/Daily.scss";

function Daily({ icon }) {
  return (
    <div className="Daily">
      <div className="daily-weather">
        <WeatherIcon icon={icon} />
        <div className="daily-temp">
          99°C
          <br />
          99°C
        </div>
      </div>
      <div className="daily-date">00 Mon, Day</div>
    </div>
  );
}

export default Daily;
