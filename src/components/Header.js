import { Link } from "react-router-dom";
import logo from "../logo-image/the-sims-mobile-mono-logo.png";
const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <img src={logo} alt="logo" className="logo" />
          <ul className="list-pack">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
