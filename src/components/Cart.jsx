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
    <div className="cartPage">
      <h2>Cart</h2>

      {/* If cart has items, display them. Otherwise, show empty cart message */}
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ margin: "1rem" }}>
                {/* Product image */}
                <div style={{ flexShrink: 0 }}>
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
                </div>

                {/* Product details (name + price) */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <h5
                    style={{
                      margin: 0,
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    {item.name}
                  </h5>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#007bff",
                    }}
                  >
                    R{item.price}
                  </p>
                </div>

                {/* Remove button */}
                <div style={{ width: "100px" }}>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                    style={{ marginLeft: "15px" }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Display total cost of all items */}
          <h6>Total Cost: R{totalCost}</h6>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}

      {/* Shipping section */}
      <div className="shipping" style={{ marginLeft: "2rem" }}>
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
          style={{ marginTop: "1rem" }}
          className="btn btn-outline-secondary"
        >
          Help ?
        </Link>
      </div>
    </div>
  );
};

export default Cart;
