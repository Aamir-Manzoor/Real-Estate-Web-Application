import HeroImg from "../assets/home.jpg";
import './Header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={HeroImg} alt="Hero-image" width={100} />
        <div className="h-menu flexCenter">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">GetStarted</a>
          <button className="button">Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
