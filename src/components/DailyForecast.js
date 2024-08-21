import Daily from "./Daily";
import "../styles/components/DailyForecast.scss";

const dailyInfo = [
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
];

function DailyForecast() {
  return (
    <div className="DailyForecast">
      <h1 className="title">5-Day Forecast</h1>
      <div className="daily-info">
        {dailyInfo.map(({ id, icon }) => (
          <div key={id}>
            <Daily icon={icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
