import Header from "./Header";
import Highlights from "./Highlights";
import HourlyForecast from "./HourlyForecast";
import "../styles/components/Main.scss";

function Main() {
  return (
    <div className="Main">
      <Header />
      <Highlights />
      <HourlyForecast />
    </div>
  );
}

export default Main;
