import { Link } from "react-router-dom";
import "./Css/Navbar.css";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link className="mt-5" to="/">
          <h3 className="footer-left">
            <span> GrocyShop</span>
          </h3>
        </Link>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/add_Products" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
          </Link>
        </li>
        <li>
          <Link to="/all_Products">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
