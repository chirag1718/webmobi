import "./home.css";

import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import leftElipse from "../../assets/Ellipse 1-1.png";
import rightElipse from "../../assets/Ellipse 1.png";
import upsideDownElipse from "../../assets/Ellipse 2.png";
const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="homeContainer">
        {/* welcome section */}
        <img className="left" src={leftElipse} alt="" />
        <img className="right" src={rightElipse} alt="" />
        <img className="upsideDown" src={upsideDownElipse} alt="" />
      </div>
      <Welcome />
      <About />
    </div>
  );
};

export default Home;
