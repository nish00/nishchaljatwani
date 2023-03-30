function NavText({ value }) {
  return <div className="navbar-text">{value}</div>;
}

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <NavText value="About" />
      <NavText value="Projects" />
      <NavText value="Blog" />
      <NavText value="Contact" />
    </div>
  );
}
