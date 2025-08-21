import React from "react";
import { useCart } from "../context/CartContext"; // Custom hook to access cart state & actions
import ShippingOptions from "./ShippingOptions"; // selecting shipping method
import { Link } from "react-router-dom"; // Navigation
import { useSelector } from "react-redux"; // Access Redux store state

const Cart = () => {
  // Get cart items, total cost, and remove function from CartContext
  const { cart, totalCost, removeFromCart } = useCart();

  // Get the currently selected shipping option from Redux state
  const { selectedShipping } = useSelector((state) => state);

  return (
    <div className="cartPage" style={{ padding: "1rem" }}>
      <h2>Cart</h2>

      {/* If cart has items, display them. Otherwise, show empty cart message */}
      {cart.length > 0 ? (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  margin: "1rem 0",
                  borderBottom: "1px solid #ddd",
                  paddingBottom: "0.5rem",
                }}
              >
                {/* Product image */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />

                {/* Product details (name + price) */}
                <div style={{ flex: 1 }}>
                  <h5
                    style={{ margin: 0, fontSize: "1.1rem", fontWeight: "600" }}
                  >
                    {item.name}
                  </h5>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "#007bff",
                    }}
                  >
                    R{item.price}
                  </p>
                </div>

                {/* Remove button */}
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Display total cost of all items */}
          <h6 style={{ marginTop: "1rem", fontWeight: "bold" }}>
            Total Cost: R{totalCost}
          </h6>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}

      {/* Shipping section */}
      <div className="shipping" style={{ marginTop: "2rem" }}>
        {/* Show selected shipping details if chosen */}
        {selectedShipping && (
          <p>
            Shipping: {selectedShipping.name} R{selectedShipping.cost}
          </p>
        )}

        {/* Allow user to pick/change shipping */}
        <ShippingOptions />

        {/* Help button links to Help page */}
        <Link
          to={"/help"}
          className="btn btn-outline-secondary"
          style={{ marginTop: "1rem" }}
        >
          Help ?
        </Link>
      </div>
    </div>
  );
};

export default Cart;
