import Img4 from "../../assets/main4.jpg";
import { MdCall } from "react-icons/md";
import "./Contact.css";
// import {HiChatBubbleBottomCenter} from 'react-icons/hi';


const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className=" flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Conatct Us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>77638 78973 6893</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src={Img4} alt="Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
