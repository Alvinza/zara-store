import React from "react";
import { useCart } from "../context/CartContext";
import ShippingOptions from './ShippingOptions';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Cart = () => {
    const { cart, totalCost, removeFromCart } = useCart();
    const { selectedShipping } = useSelector((state) => state);
 
  return (
    <div className="cartPage">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{margin: '1rem'}}>
                {item.name} - R{item.price}               
                <div style={{width: '100px'}}>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)} style={{ marginLeft: "15px" }}>
                  Remove
                </button>
                </div>
              </li>
            ))}
          </ul>
          <h6>Total Cost: R{totalCost}</h6>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
      {/* shipping information */}
      <div className="shipping" style={{marginLeft: '2rem'}}>
        {selectedShipping && (
        <p>Shipping: {selectedShipping.name}  R{selectedShipping.cost}</p>
      )}
       {/* Shipping component */}
       <ShippingOptions />
       
       {/* help button it sends you to help section */}
        <Link to={'/help'} style={{marginTop: "1rem"}} className='btn btn-outline-secondary'>Help ?</Link>
        </div>
    </div>
  );
};

export default Cart;
