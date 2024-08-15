import Map from "./Map";
import AirQuality from "./AirQuality";
import SunriseSunset from "./SunriseSunset";
import "../styles/components/Highlights.scss";

function Highlights() {
  return (
    <div className="Highlights">
      <h1 className="title">Today's Highlights</h1>
      <div className="top-info">
        <div className="sun-and-air">
          <SunriseSunset />
          <AirQuality />
        </div>
        <Map />
      </div>
      {/* <div className="bottom-info"></div> */}
    </div>
  );
}

export default Highlights;
