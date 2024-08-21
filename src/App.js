import { useContext } from "react";
import Content from "./components/Content";
import ThemeContext from "./context/theme.context";
import "./styles/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Content />
    </div>
  );
}

export default App;
