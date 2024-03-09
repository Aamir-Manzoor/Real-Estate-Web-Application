import Imgfooter from "../../assets/logo.jpg";
import "./footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* leftSide */}
        <div className="flexColStart f-left">
          <img src={Imgfooter} alt="Image" width={120} />
          <span className="secondaryText">
            Our Vision is to help by providing to the best properties
          </span>
        </div>

        {/* right Side  */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Bangalore, Karnataka</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
