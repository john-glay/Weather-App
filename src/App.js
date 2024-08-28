import Content from "./components/Content";
import ThemeContext from "./context/theme.context";
import { useContext, useEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "./styles/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";

function App() {
  const { dark } = useContext(ThemeContext);

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     var lat = position.coords.latitude;
  //     var long = position.coords.longitude;
  //     console.log("Latitude is :", lat);
  //     console.log("Longitude is :", long);
  //   });
  // } else {
  //   console.log("Geolocation is not supported by this browser.");
  // }

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [dark]);

  return (
    <SkeletonTheme
      baseColor={dark ? "#313131" : "#e0e0e0"}
      highlightColor={dark ? "#525252" : "#f5f5f5"}
    >
      <div className={`App-${dark ? "dark" : "light"}`}>
        <Content />
      </div>
    </SkeletonTheme>
  );
}

export default App;
