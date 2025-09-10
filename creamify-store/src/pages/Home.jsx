import "../styles/Home.css";
import NiveaLogo from "../assets/Nivea.png";
import PrevenseLogo from "../assets/Prevense.png";
import JanetLogo from "../assets/janet.png";
import VaselineLogo from "../assets/Vaseline.png";
import cream1 from "../assets/cream1.png";
import cream2 from "../assets/cream2.png";
import cream3 from "../assets/cream3.png";
import cream4 from "../assets/cream4.png";
import cream5 from "../assets/cream5.png";
import cream6 from "../assets/cream6.png";
import cream7 from "../assets/cream7.png";
import cream8 from "../assets/cream8.png";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Footer from "../components/Footer";
import { useRef } from "react";

const Home = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const trendingProducts = [
    {
      id: 1,
      name: "Apricot Facial Scrub",
      price: "Rs.2800",
      image: cream1,
    },
    {
      id: 2,
      name: "Sun whitening body lotion",
      price: "Rs.3200",
      image: cream2,
    },
    { id: 3, name: "Prevense Facial Wash", price: "Rs.890", image: cream3 },
    {
      id: 4,
      name: "BB Beauty Cream",
      price: "Rs.1300",
      image: cream4,
    },
  ];
  const availableCollections = [
    {
      id: 1,
      name: "Apricot Facial Scrub",
      price: "Rs.2800",
      image: cream1,
    },
    {
      id: 2,
      name: "Sun whitening body lotion",
      price: "Rs.3200",
      image: cream2,
    },
    { id: 3, name: "Prevense Facial Wash", price: "Rs.890", image: cream3 },
    {
      id: 4,
      name: "BB Beauty Cream",
      price: "Rs.1300",
      image: cream4,
    },
    {
      id: 5,
      name: "Night Moisturizer",
      price: "Rs.1990",
      image: cream5,
    },
    {
      id: 6,
      name: "Anti aging cream",
      price: "Rs.3300",
      image: cream6,
    },
    { id: 7, name: "Vaseline Lotion", price: "Rs.3200", image: cream7 },
    {
      id: 8,
      name: "Fair and Natural Fairness Cream",
      price: "Rs.2600",
      image: cream8,
    },
  ];

  return (
    <div className="home">
      <div className="hero">
        <section className="hero-section">
          <div className="bgded-overlay">
            <div className="hero-content">
              <h1>Your Skin Deserves Creamify</h1>
              <p>
                Welcome to a skincare revolution. Discover our cream collection
                infused with nature's best ingredients — aloe, rose, shea, and
                more. Whether you're fighting dryness or chasing radiance,
                Creamify has the perfect match for your skin.
              </p>
              <div className="hero-buttons">
                <button className="shop-now">Shop Now</button>
                <button className="more-info">More Info</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Brand Section */}
      <section className="brand-section">
        <h2>Brand</h2>
        <div className="brand-slider">
          <button className="brand-nav left" onClick={scrollLeft}>
            <MdOutlineKeyboardArrowLeft />
          </button>
          <div className="brand-logos" ref={sliderRef}>
            <img src={NiveaLogo} alt="Adidas" />
            <img src={PrevenseLogo} alt="Nike" />
            <img src={JanetLogo} alt="Puma" />
            <img src={VaselineLogo} alt="New Balance" />
          </div>
          <button className="brand-nav right" onClick={scrollRight}>
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="trending-products">
        <h2>Trending Products</h2>
        <div className="product-grid">
          {trendingProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <span className="product-rating">
                  <FaStar className="star-icon" /> (11.4K Reviews)
                </span>
                <h3>{product.name}</h3>
                <p className="product-price">
                  {product.price} <span className="sold-out">Sold out 85%</span>
                </p>
                <div className="product-icons">
                  <FaHeart className="heart-icon" />
                  <FaShoppingCart className="cart-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Section */}
      <section className="offer-section">
        <h2>Offers</h2>
        <div className="offer-container">
          <h1>Your Skin Deserves Creamify</h1>
          <p>
            Welcome to a skincare revolution. Discover our cream collection
            infused with nature's best ingredients — aloe, rose, shea, and more.
            Whether you're fighting dryness or chasing radiance, Creamify has
            the perfect match for your skin.
          </p>
          <div className="offer-buttons">
            <button className="shop-now">Get Offer</button>
            <button className="more-info">More Info</button>
          </div>
        </div>
      </section>

      {/* Available Collection Section */}
      <section className="trending-products">
        <h2>Available Collections</h2>
        <div className="product-grid">
          {availableCollections.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <span className="product-rating">
                  <FaStar className="star-icon" /> (11.4K Reviews)
                </span>
                <h3>{product.name}</h3>
                <p className="product-price">
                  {product.price} <span className="sold-out">Sold out 85%</span>
                </p>
                <div className="product-icons">
                  <FaHeart className="heart-icon" />
                  <FaShoppingCart className="cart-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Section */}
      <section className="offer-section">
        <h2>Reviews</h2>
        <div className="offer-container">
          <h1>Give Your Reviews</h1>
          <p>
            Discover our cream collection infused with nature's best ingredients
            — aloe, rose, shea, and more. Whether you're fighting dryness or
            chasing radiance, Creamify has the perfect match for your skin.
          </p>
          <div className="review-input">
            <input type="text" placeholder="Type your comment" />
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </section>

      <Footer />
      <div className="footer2-container"></div>
    </div>
  );
};

export default Home;
