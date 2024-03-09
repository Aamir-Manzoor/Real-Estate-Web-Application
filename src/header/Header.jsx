import { useState } from "react";
import HeroImg from "../assets/home.jpg";
import { BiMenuAltRight } from "react-icons/bi";
import "./Header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={HeroImg} alt="Hero-image" width={100} />
        <div className="h-menu flexCenter" style={getMenuStyles(menuOpen)}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">GetStarted</a>
          <button className="button">Contact</button>
        </div>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
