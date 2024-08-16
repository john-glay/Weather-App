import Map from "./Map";
import Widgets from "./Widgets";
import AirQuality from "./AirQuality";
import SunriseSunset from "./SunriseSunset";
import "../styles/components/Highlights.scss";

function Highlights() {
  return (
    <div className="Highlights">
      <h1 className="title">Today's Highlights</h1>
      <div className="info">
        <SunriseSunset />
        <AirQuality />
        <Map />
        <Widgets />
      </div>
    </div>
  );
}

export default Highlights;
