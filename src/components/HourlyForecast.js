import Hourly from "./Hourly";
import HorizontallyScrollable from "./HorizontallyScrollable";
import "../styles/components/HourlyForecast.scss";

const hourlyInfo = [
  {
    id: "0",
    num: "1",
  },
  {
    id: "1",
    num: "2",
  },
  {
    id: "2",
    num: "3",
  },
  {
    id: "3",
    num: "4",
  },
  {
    id: "4",
    num: "5",
  },
  {
    id: "5",
    num: "6",
  },
  {
    id: "6",
    num: "7",
  },
  {
    id: "7",
    num: "8",
  },
];

function HourlyForecast() {
  return (
    <div className="HourlyForecast">
      <h1 className="title">Hourly Forecast</h1>
      <HorizontallyScrollable className="hourly-info">
        {hourlyInfo.map(({ id }) => (
          <div className="no-text-select" key={id}>
            <Hourly />
          </div>
        ))}
      </HorizontallyScrollable>
    </div>
  );
}

export default HourlyForecast;
