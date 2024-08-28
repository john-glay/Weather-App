import { createContext } from "react";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  //const [loading, setLoading] = useState(true);
  const loading = true;

  return (
    <WeatherContext.Provider value={{ loading }}>
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
