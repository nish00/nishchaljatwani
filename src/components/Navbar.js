import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-text">
        <Link to = "/about">About</Link>
      </div>

      <div className="navbar-text">
        <Link to = "/projects">Projects</Link>
      </div>

      <div className="navbar-text">
        <Link to = "/blog">Blog</Link>
      </div>

      <div className="navbar-text">
        <Link to = "/contact">Contact</Link>
      </div>
    </div>
  );
}
