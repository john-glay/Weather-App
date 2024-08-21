const { createContext, useState, useEffect } = require("react");

const ThemeContext = createContext();
const THEME_KEY = "theme";

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  const saveThemeToLocalStorage = (theme) => {
    localStorage.setItem(THEME_KEY, JSON.stringify(theme));
  };

  useEffect(() => {
    const saveTheme = JSON.parse(localStorage.getItem(THEME_KEY));
    if (saveTheme !== null) {
      setDark(saveTheme);
      return;
    }

    const isSystemThemeDark = window.matchMedia("(prefers-color-dark)").matches;
    setDark(isSystemThemeDark);
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, setDark, saveThemeToLocalStorage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
export default ThemeContext;
