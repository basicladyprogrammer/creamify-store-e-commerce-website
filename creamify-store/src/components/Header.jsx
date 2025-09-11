import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Apricot Facial Scrub" },
  { id: 2, name: "Sun whitening body lotion" },
  { id: 3, name: "Prevense Facial Wash" },
  { id: 4, name: "BB Beauty Cream" },
  { id: 5, name: "Night Moisturizer" },
  { id: 6, name: "Anti aging cream" },
  { id: 7, name: "Vaseline Lotion" },
  { id: 8, name: "Fair and Natural Fairness Cream" },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const match = products.find((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (match) {
      navigate(`/product/${match.id}`);
    } else {
      alert("Product not found");
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Creamify Logo" className="logo" />
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search creams..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <button className="navbar-toggler" onClick={handleNavToggle}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={isNavOpen ? "nav-links nav-open" : "nav-links"}>
        <ul>
          <li>
            <NavLink to="/" onClick={handleNavToggle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product/1" onClick={handleNavToggle}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" onClick={handleNavToggle}>
              My Products
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={isNavOpen ? "icons icons-open" : "icons"}>
        <NavLink to="/cart" onClick={handleNavToggle}>
          <FaShoppingCart className="icon1" />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>
        <FaUserCircle className="icon2" />
      </div>
    </header>
  );
};

export default Header;
