
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Image from "react-bootstrap/Image";

const Cardcomponent = ({ product }) => {
  if (!product) {
    return <p>No product data available.</p>; // Handle missing product data
  }

  return (
    <Link to={`/product/${product.id}`}>
      <Card id="card" style={{ width: "18rem" }}>
        <Card.Body>
          <Image
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
            src={product.imageURL || "placeholder.jpg"}  // Default placeholder if image is missing
            fluid
          />
          <Card.Title>{product.name || "Unnamed Product"}</Card.Title>
          <p>Description: {product.description || "No description available"}</p>
          <p>Price: ${product.price || "N/A"}</p>
          <Button id="btn" variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Cardcomponent;
