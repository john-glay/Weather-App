import WeatherContext from "../context/weather.context";
import { useContext, useState } from "react";
import { MEASUREMENT_SYSTEMS } from "../constants";
import "../styles/components/Settings.scss";

function Settings() {
  const [openSettings, setOpenSettings] = useState(false);
  const { measurementSystem, setMeasurementSystem } =
    useContext(WeatherContext);

  const changeMeasurementSystem = (system) => {
    const value = MEASUREMENT_SYSTEMS[system];
    setMeasurementSystem(value);
    setOpenSettings(false);
  };

  return (
    <div
      className="Settings"
      onClick={() => setOpenSettings((prevOpenSettings) => !prevOpenSettings)}
    >
      <i className={`bi bi-gear${openSettings ? "-fill" : ""}`}></i>
      <div className={`settings-menu ${openSettings ? "open" : ""}`}>
        <p>Measurement Systems:</p>
        <div className="measurements">
          {Object.keys(MEASUREMENT_SYSTEMS).map((system) => (
            <div
              className={`system ${
                MEASUREMENT_SYSTEMS[system] === measurementSystem
                  ? "active"
                  : ""
              }`}
              key={system}
              onClick={(e) => {
                e.stopPropagation();
                changeMeasurementSystem(system);
              }}
            >
              {system}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
