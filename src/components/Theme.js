import { useContext } from "react";
import ThemeContext from "../context/theme.context";
import "../styles/components/Theme.scss";

function Theme() {
  const { dark, setDark, saveThemeToLocalStorage } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
    saveThemeToLocalStorage(!dark);
  };

  return (
    <div className="Theme" onClick={toggleTheme}>
      <div className={`light-theme-btn ${dark ? "" : "active"}`}>
        <i className="bi bi-sun"></i>
      </div>
      <div className={`dark-theme-btn ${dark ? "active" : ""}`}>
        <i className="bi bi-moon"></i>
      </div>
    </div>
  );
}

export default Theme;
