import "../styles/components/Hourly.scss";

function Hourly() {
  return (
    <>
      <div className="day">Now</div>
      <div className="hourly">
        <div className="time">00 AM</div>
        <img src="images/weather-icons/10d.png" alt="description" draggable={false} />
        <div className="hourly-temp">99°C</div>
      </div>
    </>
  );
}

export default Hourly;
