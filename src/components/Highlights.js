import Map from "./Map";
import Widgets from "./Widgets";
import AirQuality from "./AirQuality";
import SunriseSunset from "./SunriseSunset";
import "../styles/components/Highlights.scss";

function Highlights({ currentWeather, airPollution }) {
  const { lon, lat } = currentWeather.coord;
  const location = [lon, lat];

  return (
    <div className="Highlights">
      <h1 className="title">Today's Highlights</h1>
      <div className="highlights-info">
        <SunriseSunset data={currentWeather} />
        <AirQuality data={airPollution} />
        <Map center={location} />
        <Widgets data={currentWeather} />
      </div>
    </div>
  );
}

export default Highlights;
