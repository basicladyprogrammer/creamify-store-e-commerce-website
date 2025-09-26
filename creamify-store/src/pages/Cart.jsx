import "../styles/Cart.css";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1>My Products</h1>
      {cartItems.length === 0 ? (
        <div className="empty-state">
          <div className="empty-card">
            <img
              className="empty-illustration"
              src={require("../assets/empty-cart.png")}
              alt="Your bag is empty"
            />
            <h2>Your bag is empty</h2>
            <p>Looks like you haven’t added anything yet.</p>

            <div className="empty-actions">
              <button
                className="shop-now"
                onClick={() => navigate("/product/1")}>
                Browse products
              </button>
              <button className="more-info" onClick={() => navigate("/")}>
                Go home
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-items-grid">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }>
                      -
                    </button>
                    <input type="text" value={item.quantity} readOnly />
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }>
                      +
                    </button>
                  </div>
                  <p>Price: {item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: Rs. {totalPrice}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
