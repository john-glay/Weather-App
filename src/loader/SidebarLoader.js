import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/loader/SidebarLoader.scss";

function SidebarLoader() {
  const now = new Date();

  const optionsDate = {
    day: "2-digit",
    month: "short",
    weekday: "short",
  };

  const formattedDate = now.toLocaleDateString("en-US", optionsDate);

  return (
    <>
      <div className="PlaceLoader">
        <i className="bi bi-geo-alt-fill"></i>
        <div className="location">
          <Skeleton className="city" />
          <Skeleton className="country" />
          <p className="place-date">
            <span>•</span>
            {formattedDate}
          </p>
        </div>
      </div>
      <div className="WeatherLoader">
        <Skeleton className="img" />
        <div>
          <Skeleton className="temperature" />
          <Skeleton className="description" />
        </div>
      </div>
    </>
  );
}

export default SidebarLoader;
