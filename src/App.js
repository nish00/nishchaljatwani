import LeftMainContainer from "./components/LeftMainContainer";
import RightMainContainer from "./components/RightMainContainer";
import "./styles.css";

export default function App() {
  return (
    <div className="window-container">
      <LeftMainContainer />
      <RightMainContainer />
    </div>
  );
}
