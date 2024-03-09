import Imgfooter from "../../assets/logo.jpg";
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
      </div>
    </section>
  );
};

export default Footer;
