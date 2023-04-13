import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-text">
        <Link to = "/about" style={{color:"#0f172a",textDecoration:'none'}}>About</Link>
      </div>

      <div className="navbar-text">
        <Link to = "/projects" style={{color:"#0f172a",textDecoration:'none'}}>Projects</Link>
      </div>

      <div className="navbar-text">
        <Link to = "/blog" style={{color:"#0f172a",textDecoration:'none'}}>Blog</Link>
      </div>

      <div className="navbar-text">
        <Link to = "/contact" style={{color:"#0f172a",textDecoration:'none'}}>Contact</Link>
      </div>
    </div>
  );
}
