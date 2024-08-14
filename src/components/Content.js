import Sidebar from "./Sidebar";
import Main from "./Main";
import "../styles/components/Content.scss";

function Content() {
  return (
    <div className="Content">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Content;
