import isoCountries from "../api/isoCountries";
import WeatherContext from "../context/weather.context";
import { useContext } from "react";
import "../styles/components/Place.scss";

function Place() {
  const { place } = useContext(WeatherContext);
  const country = isoCountries[place.country] || place.country;
  const now = new Date();

  const optionsDate = {
    day: "2-digit",
    month: "short",
    weekday: "short",
  };

  const formattedDate = now.toLocaleDateString("en-US", optionsDate);

  return (
    <div className="Place">
      <i className="bi bi-geo-alt-fill"></i>
      <div className="location">
        <p className="city">{place.name},&nbsp;</p>
        <p className="country">{country}</p>
        <p className="place-date">
          <span>•</span>
          {formattedDate}
        </p>
      </div>
    </div>
  );
}

export default Place;
