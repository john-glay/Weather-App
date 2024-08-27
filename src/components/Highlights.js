import Map from "./Map";
import Widgets from "./Widgets";
import AirQuality from "./AirQuality";
import SunriseSunset from "./SunriseSunset";
import "../styles/components/Highlights.scss";

function Highlights() {
  const manila = [120.9822, 14.6042];

  return (
    <div className="Highlights">
      <h1 className="title">Today's Highlights</h1>
      <div className="highlights-info">
        <SunriseSunset />
        <AirQuality />
        <Map center={manila} />
        <Widgets />
      </div>
    </div>
  );
}

export default Highlights;
