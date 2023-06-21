import "./welcome.css";
import bulb from "../../../assets/Creative team-pana 1.png";

const Welcome = () => {
  return (
    <div>
      <section className="welcome">
        <div className="welWrapper">
          <div className="welContainer">
            <div className="welItem">
              <div>
                <span>Welcome to </span>{" "}
                <span className="incubyte"> Incubyte</span>
              </div>
              <p>Building bridegs to success in the tech ecosystem</p>
              <div className="imgWrapper">
                <img src={bulb} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
