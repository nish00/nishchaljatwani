import FerrisWheel from "../vector-graphics/FerrisWheel";
import Silhouette from "../vector-graphics/Silhouette";

export default function VectorGraphics() {
    return(
        <div className="vector-bottom-bar">
            <div className = "vector-graphics">
                <div className="silhouette">
                    <Silhouette/>
                </div>
                    <FerrisWheel/>
            </div>
            <div className="bottom-rectangle"></div>
            <div className="bottom-text">Made with &nbsp;<span role="img" aria-label="love" className ="heart-beat">
              ❤️
            </span>{" "} in Canada</div>
          </div>
    )
}