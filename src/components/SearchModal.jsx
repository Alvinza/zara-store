// components/SearchModal.jsx
import React, { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";

function SearchModal({ show, handleClose, allProducts }) {
  const [query, setQuery] = useState("");

  // 🔍 Filter products by name/description
  const filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Search Products</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Search Input */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Type to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Search Results */}
        <div className="d-flex flex-wrap">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card key={product.id} style={{ width: "14rem", margin: "10px" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>R{product.price}</Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SearchModal;
