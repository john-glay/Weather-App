import Place from "./Place";
import Weather from "./Weather";
import SidebarLoader from "../loader/SidebarLoader";
import WeatherContext from "../context/weather.context";
import { useContext } from "react";
import "../styles/components/Sidebar.scss";

function Sidebar() {
  const { loading } = useContext(WeatherContext);
  const now = new Date();

  const optionsDate = {
    day: "2-digit",
    month: "short",
    weekday: "short",
  };

  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = now.toLocaleDateString("en-US", optionsDate);
  const formattedTime = now.toLocaleTimeString("en-US", optionsTime);

  return (
    <div className="Sidebar">
      {loading ? (
        <SidebarLoader />
      ) : (
        <>
          <Place />
          <Weather />
        </>
      )}
      <div className="date">
        {formattedDate}
        <span>•</span>
        {formattedTime}
      </div>
    </div>
  );
}

export default Sidebar;
