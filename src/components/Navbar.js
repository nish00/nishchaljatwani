import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
        <NavLink  to = "/about"
                  className = {({isActive}) => 
                      isActive ? "navbar-text-active":"navbar-text"
                } 
                  style = {({isActive}) => {
                    return {
                      color: isActive ? "#0f172a" : "gray",
                      textDecoration:"none"
                    };    
                  }}
                  > About</NavLink>

        <NavLink  to = "/projects"
                  className = "navbar-text" 
                  style = {({isActive}) => {
                    return {
                      color: isActive ? "#0f172a" : "gray",
                      textDecoration:"none",
                    };    
                  }}
                  >Projects</NavLink>


        <NavLink  to = "/blog"
                  className = "navbar-text"     
                  style = {({isActive}) => {
                    return {
                      color: isActive ? "#0f172a" : "gray",
                      textDecoration:"none"
                    };    
                  }}
                  >Blog</NavLink>
  
        <NavLink  to = "/contact"
                  className = "navbar-text"      
                  style = {({isActive}) => {
                    return {
                      color: isActive ? "#0f172a" : "gray",
                      textDecoration:"none"
                    };    
                  }}
                  >Contact</NavLink>
    </div>
  );
}
