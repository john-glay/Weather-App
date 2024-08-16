import Hourly from "./Hourly";
import "../styles/components/HourlyForecast.scss";

function HourlyForecast() {
  return (
    <div className="HourlyForecast">
      <h1 className="title">Hourly Forecast</h1>
      <div className="hourly-info">
        <Hourly />
      </div>
    </div>
  );
}

export default HourlyForecast;
