import Map from "./Map";
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
        <div className="one">one</div>
        <div className="two">two</div>
        <div className="three">three</div>
        <div className="four">four</div>
      </div>
    </div>
  );
}

export default Highlights;
