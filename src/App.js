import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog.js";
import Contact from "./pages/Contact.js";
import NotFound from "./pages/NotFound";


import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import NavBar from "./components/Navbar";


export default function App() {
  return (
    <Router>
        <NavBar/>
        <div className="rightBox">
          <Routes>
            <Route path ="/" element={<HomePage />} />
            <Route path ="/about" element={<About />}/>
            <Route path ="/projects" element={<Projects />}/>
            <Route path ="/blog" element={<Blog />}/>
            <Route path ="/contact" element={<Contact />}/>
            <Route path ="*" element={<NotFound />}/>
          </Routes>
      </div>
    </Router>
  );
}
