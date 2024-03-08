import mainImg from "../assets/mainImage.jpg";
import "./Extra.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Extra = () => {
  return (
    <>
      <section className="extra-wrapper">
        <div className="paddings innerWidth flexCenter extra-container">
          <div className="flexColStart extra-left">
            <div className="extra-title">
              <div className="blueCircle"></div>
              <h1 className="secondaryText">
                Discover <br /> Most Perfect <br /> Property
              </h1>
            </div>
            <div className="flexColStart extra-des">
              <span className="secondaryText">
                Find Beautiful properties that suite you the best
              </span>
              <span className="secondaryText">
                You will not face any difficulties in finding the beset
                residence for you
              </span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="red" size={25}></HiLocationMarker>
              <input type="text" />
              <button className="button">Search</button>
            </div>

            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8500} end={9000} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Premimum Properties</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={50} end={90} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Clients</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={10} end={25} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Award Winnings</span>
              </div>
            </div>
          </div>
          <div className="flexCenter extra-right">
            <div className="image-container">
              <img src={mainImg} alt="Main Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Extra;
