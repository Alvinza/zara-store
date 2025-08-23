import React from "react";
import { useCart } from "../context/CartContext";
import { Card } from "react-bootstrap";
import menGallery from "../assets/menData/menData";

function Men() {
  const { addToCart } = useCart();

  return (
    // Store section, I used bootstrap for the card, I also used map method to render the products
    <div className="storeImage productsBackground">
      <h1 className="text-center">Men</h1>
      <div className="d-flex flex-wrap products">
        {menGallery.map((product) => (
          <Card key={product.id} style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <b>Price: R{product.price}</b>
              </Card.Text>
              <button
                className="btn"
                style={{ backgroundColor: "#ffb766", border: "none" }}
                onClick={() => {
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Men;
