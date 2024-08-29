import WeatherContext from "../context/weather.context";
import { useContext } from "react";
import { currentPlace } from "../api";
import "../styles/components/CurrentLocation.scss";

function CurrentLocation() {
  const { setPlace } = useContext(WeatherContext);

  async function onSearch() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          try {
            const data = await currentPlace(lat, lon);
            setPlace(data[0]);
          } catch (error) {
            console.error(error);
          }
        },
        (error) => {
          alert("You have denied access to your current location.");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div className="CurrentLocation" onClick={onSearch}>
      <i className="bi bi-crosshair"></i>
      <span>Current Location</span>
    </div>
  );
}

export default CurrentLocation;
