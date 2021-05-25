import { Link } from "react-router-dom";
import "./Css/Navbar.css";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h3>
          <Link className="home" to="/">
            GrocyShop
          </Link>
        </h3>
      </div>

      <ul className="navbar__links mr-3">
        <li>
          <Link to="/add_Products" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
          </Link>
        </li>
        <li className="cart__link">
          <Link to="/update/:id">Update</Link>
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
