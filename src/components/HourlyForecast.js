import Hourly from "./Hourly";
import HorizontallyScrollable from "./HorizontallyScrollable";
import "../styles/components/HourlyForecast.scss";

const hourlyInfo = [
  {
    id: "0",
    icon: "01d",
  },
  {
    id: "1",
    icon: "01n",
  },
  {
    id: "2",
    icon: "02d",
  },
  {
    id: "3",
    icon: "02n",
  },
  {
    id: "4",
    icon: "03d",
  },
  {
    id: "5",
    icon: "03n",
  },
  {
    id: "6",
    icon: "11d",
  },
  {
    id: "7",
    icon: "11n",
  },
];

function HourlyForecast() {
  return (
    <div className="HourlyForecast">
      <h1 className="title">Hourly Forecast</h1>
      <HorizontallyScrollable className="hourly-info">
        {hourlyInfo.map(({ id, icon }) => (
          <div className="no-text-select" key={id}>
            <Hourly icon={icon} />
          </div>
        ))}
      </HorizontallyScrollable>
    </div>
  );
}

export default HourlyForecast;
