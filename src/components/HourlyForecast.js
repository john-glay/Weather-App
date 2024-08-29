import Hourly from "./Hourly";
import HorizontallyScrollable from "./HorizontallyScrollable";
import "../styles/components/HourlyForecast.scss";

function HourlyForecast({ data, units }) {
  return (
    <div className="HourlyForecast">
      <h1 className="title">3-Hour Forecast</h1>
      <HorizontallyScrollable className="hourly-info">
        {data.map((singleData) => (
          <div className="no-text-select" key={singleData.dt_txt}>
            <Hourly singleData={singleData} units={units} />
          </div>
        ))}
      </HorizontallyScrollable>
    </div>
  );
}

export default HourlyForecast;
