import { useParams } from "react-router-dom";
import "../styles/Productdetail.css";
import { useState } from "react";
import cream1 from "../assets/cream1.png";
import cream2 from "../assets/cream2.png";
import cream3 from "../assets/cream3.png";
import cream4 from "../assets/cream4.png";
import cream5 from "../assets/cream5.png";
import cream6 from "../assets/cream6.png";
import cream7 from "../assets/cream7.png";
import cream8 from "../assets/cream8.png";
import cream9 from "../assets/cream9.png";
import cream10 from "../assets/cream10.png";
import cream11 from "../assets/cream11.png";
import cream12 from "../assets/cream12.png";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const availableCollections = [
  {
    id: 1,
    name: "Apricot Facial Scrub",
    price: "Rs.2800",
    image: cream1,
    description:
      "Prevense Apricot Facial Scrub For Normal To Dry Skin. A refreshing apricot facial scrub to exfoliate your skin gently.",
  },
  {
    id: 2,
    name: "Sun whitening  lotion",
    price: "Rs.3200",
    image: cream2,
    description:
      "Brighten and hydrate your skin with this daily-use whitening body lotion. Infused with SPF and vitamin-rich ingredients, it helps reduce sun damage while enhancing skin tone for a visibly glowing finish.",
  },
  {
    id: 3,
    name: "Prevense Facial Wash",
    price: "Rs.890",
    image: cream3,
    description:
      "A gentle yet effective facial cleanser designed to remove dirt, oil, and impurities. Formulated for daily use, it purifies the skin while maintaining its natural moisture balance — perfect for all skin types.",
  },
  {
    id: 4,
    name: "BB Beauty Cream",
    price: "Rs.1300",
    image: cream4,
    description:
      "Get instant coverage and a natural glow with this all-in-one BB Beauty Cream. It hydrates, evens skin tone, and provides light sun protection — perfect for daily wear without the heaviness of foundation.",
  },
  {
    id: 5,
    name: "Night Moisturizer",
    price: "Rs.1990",
    image: cream5,
    description:
      "Wake up to deeply nourished skin with this vitamin E-enriched night moisturizer. Its rich, creamy texture repairs skin overnight, locking in moisture and improving skin elasticity while you sleep.",
  },
  {
    id: 6,
    name: "Anti aging cream",
    price: "Rs.3300",
    image: cream6,
    description:
      "Combat signs of aging with this dermatologist-approved anti-aging cream. Reduces fine lines, firms skin, and boosts collagen production with active ingredients like retinol and hyaluronic acid.",
  },
  {
    id: 7,
    name: "Vaseline Lotion",
    price: "Rs.3200",
    image: cream7,
    description:
      "Trusted for generations, Vaseline body lotion deeply moisturizes dry skin, leaving it soft and smooth all day long. Suitable for sensitive skin and free from harsh chemicals.",
  },
  {
    id: 8,
    name: "Fair and Natural Fairness Cream",
    price: "Rs.2600",
    image: cream8,
    description:
      "Brighten your complexion naturally with this herbal fairness cream. Enriched with saffron and turmeric extracts, it helps reduce dark spots, pigmentation, and uneven skin tone with regular use.",
  },
  {
    id: 9,
    name: "Night Moisturizer",
    price: "Rs.1990",
    image: cream9,
    description:
      "Wake up to deeply nourished skin with this vitamin E-enriched night moisturizer. Its rich, creamy texture repairs skin overnight, locking in moisture and improving skin elasticity while you sleep.",
  },
  {
    id: 10,
    name: "Anti Aging Cream",
    price: "Rs.3300",
    image: cream10,
    description:
      "Combat signs of aging with this dermatologist-approved anti-aging cream. Reduces fine lines, firms skin, and boosts collagen production with active ingredients like retinol and hyaluronic acid.",
  },
  {
    id: 11,
    name: "Vaseline Lotion",
    price: "Rs.3200",
    image: cream11,
    description:
      "Trusted for generations, Vaseline body lotion deeply moisturizes dry skin, leaving it soft and smooth all day long. Suitable for sensitive skin and free from harsh chemicals.",
  },
  {
    id: 12,
    name: "Fair and Natural Fairness Cream",
    price: "Rs.2600",
    image: cream12,
    description:
      "Brighten your complexion naturally with this herbal fairness cream. Enriched with saffron and turmeric extracts, it helps reduce dark spots, pigmentation, and uneven skin tone with regular use.",
  },
];

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = availableCollections.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <div className="product-detail-container">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info-section">
          <h2>{product.name}</h2>
          <p className="product-price-detail">{product.price} LKR</p>
          <div className="product-rating-detail">
            <FaStar className="star-icon" />
            <span>5.0 (11.4K reviews)</span>
          </div>
          <p className="product-description-detail">{product.description}</p>

          <div className="quantity-control">
            <span>Quantity</span>
            <div className="quantity-box">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <input type="text" value={quantity} readOnly />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product, quantity)}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Available Collection Section */}
      <section className="all-products">
        <h2>Available Collections</h2>
        <div className="product-grid">
          {availableCollections.map((product) => (
            // <div key={product.id} className="product-card">
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ cursor: "pointer" }}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <span className="product-rating">
                  <FaStar className="star-icon" /> (11.4K Reviews)
                </span>
                <h3>{product.name}</h3>
                <p className="product-price">
                  {product.price} <br />
                  <span className="sold-out">Sold out 85%</span>
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
      <Footer />
      <div className="footer2-container"></div>
    </div>
  );
};

export default ProductDetail;
