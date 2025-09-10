import "../styles/Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-logo">
            <img src={logo} alt="Shoe Palace Logo" />
          </div>
          <div className="footer-section">
            <h3>Pages</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/product">Product</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Brand</h3>
            <ul>
              <li>Nivea</li>
              <li>Prevense</li>
              <li>Janet</li>
              <li>Vaseline</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>+94 xx xxx xxx</li>
              <li>info@creamify.com</li>
              <li>Follow</li>
              <li>Market</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
