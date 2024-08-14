import "../styles/components/Weather.scss";

function Weather() {
  return (
    <div className="Weather">
      <img src="images/weather-icons/10d.png" alt="description" />
      <div>
        <p className="temperature">
          99<span>°C</span>
        </p>
        <div className="description">Moderate Rain</div>
      </div>
    </div>
  );
}

export default Weather;
