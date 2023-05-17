import GitHub from "../icons/GitHub";
import Email from "../icons/Email";
import Linkedin from "../icons/LinkedIn";

export default function RightInfoContainer() {
    return (
        <div className="rightBox-text-wrapper">
          <div className="rightBox-hello-text">Hello!</div>
          <div className="rightBox-introduction-text">
            <span role="img" aria-label="wave" className="wave-hand">
              👋
            </span>
            &nbsp; I'm Nishchal. I am a computer science student at &nbsp;
            <a href="https://algomau.ca/" style={{ color: "#0f172a" }}>
              Algoma University
            </a>
            <br />
            <br />I am currently seeking an internship in software engineering.
            <span role="img" aria-label="love" className ="heart-beat">
              ❤️
            </span>{" "}
            I love to code, and as a curious and passionate programmer, I have
            taught myself multiple web technologies and techniques. Primarily, I
            use Java for application programming, HTML || CSS || JavaScript for
            web development, and Python for scripting.
          </div>

          {/*Links*/}
          <div className = "link-sites" >
            
            {/*GitHub*/}
            <div className = "link-github">
              <a href = "https://github.com/nish00" style={{color:"gray"}}><GitHub/></a>
            </div>

            {/*LinkedIn*/}
            <div className = "link-linkedin">
              <a href = "https://linkedin.com/in/nishchaljatwani" style={{color:"gray"}}><Linkedin/></a>
            </div>

            {/*Email*/}
            <div className = "link-email">
             <a href = "mailto:nishchal.jatwani@gmail.com" style={{color:"gray"}}><Email/></a>
            </div>
          </div>
        </div>
    );
  }
  