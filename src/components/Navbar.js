import { NavLink } from 'react-router-dom';
import HomeButton from '../icons/house';

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
        <NavLink  to = "/" 
                  className="home-button-active"
                  style = {({isActive}) => {
                    return {
                      color: isActive ? "#2563eb" : "gray",
                    };    
                  }}>
          <HomeButton />
        </NavLink> 

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
                  className = {({isActive}) => 
                      isActive ? "navbar-text-active":"navbar-text"
                }  
                  style = {({isActive}) => {
                    return {
                      color: isActive ? "#0f172a" : "gray",
                      textDecoration:"none",
                    };    
                  }}
                  >Projects</NavLink>


        <NavLink  to = "/blog"
                  className = {({isActive}) => 
                      isActive ? "navbar-text-active":"navbar-text"
                }       
                  style = {({isActive}) => {
                    return {
                      color: isActive ? "#0f172a" : "gray",
                      textDecoration:"none"
                    };    
                  }}
                  >Blog</NavLink>
  
        <NavLink  to = "/contact"
                  className = {({isActive}) => 
                      isActive ? "navbar-text-active":"navbar-text"
                }        
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
