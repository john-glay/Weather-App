import { useContext, useEffect } from "react";
import Content from "./components/Content";
import ThemeContext from "./context/theme.context";
import "./styles/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";

function App() {
  const { dark } = useContext(ThemeContext);

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
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Content />
    </div>
  );
}

export default App;
