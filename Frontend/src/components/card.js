// card.js
import React from "react";
import { Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/esm/Image";

const Cardcomponent = ({ product }) => {
  if (!product) {
    return <p>No product data available.</p>;
  }

  return (
    <Card id="card" style={{ width: "18rem" }}>
      <Card.Body>
        <Image src={product.imageURL || "placeholder.jpg"} fluid />
        <Card.Title>{product.name || "Unnamed Product"}</Card.Title>
        <p>Description: {product.description || "No description"}</p>
        <p>Price: ${product.price || "N/A"}</p>
        <Button id="btn" variant="primary">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cardcomponent;
