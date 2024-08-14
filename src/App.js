import Content from "./components/Content";
import "./styles/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";

function App() {
  const dark = true;

  return (
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Content />
    </div>
  );
}

export default App;
