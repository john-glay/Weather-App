import Hourly from "./Hourly";
import HorizontallyScrollable from "./HorizontallyScrollable";
import { getHourlyForecast } from "../api";
import "../styles/components/HourlyForecast.scss";

function HourlyForecast() {
  const data = getHourlyForecast();

  return (
    <div className="HourlyForecast">
      <h1 className="title">3-Hour Forecast</h1>
      <HorizontallyScrollable className="hourly-info">
        {data.map((singleData) => (
          <div className="no-text-select" key={singleData.dt_txt}>
            <Hourly singleData={singleData} />
          </div>
        ))}
      </HorizontallyScrollable>
    </div>
  );
}

export default HourlyForecast;
