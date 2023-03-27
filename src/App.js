import "./styles.css";

function UpperText({ value }) {
  return <div className="upperText">{value}</div>;
}

function UpperBox() {
  return (
    <div className="upperBox">
      <div className="upper-text-wrapper">
        <UpperText value="About" />
        <UpperText value="Projects" />
        <UpperText value="Blog" />
        <UpperText value="Contact" />
      </div>
    </div>
  );
}

function LowerText({ value }) {
  return <div className="lowerText">{value}</div>;
}

function LowerBox() {
  return (
    <div className="lowerBox">
      <div className="lower-text-wrapper">
        <LowerText value="About" />
        <LowerText value="Blog" />
        <LowerText value="Contact" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <UpperBox />
      <LowerBox />
    </>
  );
}
