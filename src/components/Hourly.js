import "../styles/components/Hourly.scss";
import WeatherIcon from "./WeatherIcon";

function Hourly({ singleData }) {
  const { icon, description } = singleData.weather[0];
  const { temp } = singleData.main;
  const date = new Date(singleData.dt_txt);
  const now = new Date();

  const optionsDate = {
    day: "2-digit",
    month: "short",
  };

  const optionsTime = {
    hour: "2-digit",
    hour12: true,
  };

  const formattedDate = date.toLocaleDateString("en-US", optionsDate);
  const formattedTime = date.toLocaleTimeString("en-US", optionsTime);
  const nowDate = now.toLocaleDateString("en-US", optionsDate);

  // Calculate the time difference in hours
  const timeDifference = (now - date) / (1000 * 60 * 60);

  // Determine if "Now" should be displayed
  const showNow =
    formattedDate === nowDate && timeDifference >= 0 && timeDifference < 3;

  // Determine if the date should be shown only at 00:00:00
  const showDate = formattedTime === "12 AM" && formattedDate !== nowDate;

  return (
    <>
      <div className="day">
        {showNow ? "Today at" : showDate ? formattedDate : ""}
      </div>
      <div className="Hourly">
        <div className="time">{formattedTime}</div>
        <WeatherIcon icon={icon} description={description} />
        <div className="hourly-temp">{Math.ceil(temp)}°C</div>
      </div>
    </>
  );
}

export default Hourly;
