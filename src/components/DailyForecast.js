import Daily from "./Daily";
import "../styles/components/DailyForecast.scss";

function DailyForecast({ data, units }) {
  return (
    <div className="DailyForecast">
      <h1 className="title">5-Day Forecast</h1>
      <div className="daily-info">
        {data.map((singleData) => (
          <div key={singleData.dt_txt}>
            <Daily singleData={singleData} units={units} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
