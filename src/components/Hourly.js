import "../styles/components/Hourly.scss";
import WeatherIcon from "./WeatherIcon";

function Hourly({ icon }) {
  return (
    <>
      <div className="day">Now</div>
      <div className="hourly">
        <div className="time">00 AM</div>
        <WeatherIcon icon={icon} />
        <div className="hourly-temp">99°C</div>
      </div>
    </>
  );
}

export default Hourly;
