import Place from "./Place";
import Weather from "./Weather";
import "../styles/components/Sidebar.scss";

function Sidebar() {
  return (
    <div className="Sidebar">
      <Place />
      <Weather />
      <div className="date">
        00 Mon, Day<span>•</span>00:00 AM
      </div>
    </div>
  );
}

export default Sidebar;
