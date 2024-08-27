import Daily from "./Daily";
import { getDailyForecast } from "../api";
import "../styles/components/DailyForecast.scss";

function DailyForecast() {
  const data = getDailyForecast();

  return (
    <div className="DailyForecast">
      <h1 className="title">5-Day Forecast</h1>
      <div className="daily-info">
        {data.map((singleData) => (
          <div key={singleData.dt_txt}>
            <Daily singleData={singleData} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
