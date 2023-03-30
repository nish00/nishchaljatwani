import MiddleContainer from "../components/MiddleContainer";
import NavBar from "../components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="window-container">
      <NavBar />
      <MiddleContainer />
    </div>
  );
}
