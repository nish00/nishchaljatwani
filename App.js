import "./styles.css";

function UpperText({ value }) {
  return <div className="upperText">{value}</div>;
}
function SideBox() {
  return (
    <div className="main-container">
      <NavBar />
      <div className="center-container">
        <div className="side-box" style={{ textAlign: "center" }}>
          This area is work in progress
        </div>
        <UpperBox />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="upper-text-wrapper">
      <UpperText value="About" />
      <UpperText value="Projects" />
      <UpperText value="Blog" />
      <UpperText value="Contact" />
    </div>
  );
}

function UpperBox() {
  return (
    <div className="upperBox">
      <div className="introduction-text-wrapper">
        <div className="hello-text">Hello!</div>
        <div className="introduction-text">
          <span role="img" aria-label="wave">
            👋
          </span>{" "}
          I'm Nishchal. I am a computer science student at &nbsp;
          <a href="https://algomau.ca/" style={{ color: "#0f172a" }}>
            Algoma University
          </a>
          <br />
          <br />I am currently seeking an internship in software engineering.
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          I love to code, and as a curious and passionate programmer, I have
          taught myself multiple web technologies and techniques. Primarily, I
          use Java for application programming, HTML || CSS || JavaScript for
          web development, and Python for scripting.
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return <SideBox />;
}
