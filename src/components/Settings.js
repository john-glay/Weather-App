import { useState } from "react";
import "../styles/components/Settings.scss";

function Settings() {
  const [openSettings, setOpenSettings] = useState(false);

  const units = [
    {
      id: "0",
      system: "standard",
    },
    {
      id: "1",
      system: "metric",
    },
    {
      id: "2",
      system: "imperial",
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
              className={`system ${system === "standard" ? "active" : ""}`}
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
