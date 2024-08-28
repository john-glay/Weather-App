import { useState } from "react";
import "../styles/components/Settings.scss";

function Settings() {
  const [openSettings, setOpenSettings] = useState(false);

  const units = [
    {
      id: "0",
      system: "Celsius",
    },
    {
      id: "1",
      system: "Fahrenheit",
    },
    {
      id: "2",
      system: "Kelvin",
    },
  ];

  return (
    <div
      className="Settings"
      onClick={() => setOpenSettings((prevVal) => !prevVal)}
    >
      <i className={`bi bi-gear${openSettings ? "-fill" : ""}`}></i>
      <div className={`settings-menu ${openSettings ? "open" : ""}`}>
        <p>Measurement Systems:</p>
        <div className="measurements">
          {units.map(({ id, system }) => (
            <div
              className={`system ${system === "Celsius" ? "active" : ""}`}
              key={id}
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
