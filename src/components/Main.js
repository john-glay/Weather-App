import Header from "./Header";
import Highlights from "./Highlights";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import "../styles/components/Main.scss";
import Footer from "./Footer";

function Main() {
  return (
    <div className="Main">
      <Header />
      <Highlights />
      <HourlyForecast />
      <DailyForecast />
      <hr />
      <Footer />
    </div>
  );
}

export default Main;
