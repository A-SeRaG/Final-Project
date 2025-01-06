// card.js
import React from "react";
import { Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/esm/Image";
import axios from "axios";

const Cardcomponent = ({ product }) => {
  if (!product) {
    return <p>No product data available.</p>;
  }
  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You must be logged in to add products to the cart.");
        return;
      }

      await axios.post(
        "http://localhost:8080/api/v1/cart",
        { productId: product.id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  return (
    <Card id="card" style={{ width: "18rem" }}>
      <Card.Body>
        <Image src={product.imageURL || "placeholder.jpg"} fluid />
        <Card.Title>{product.name || "Unnamed Product"}</Card.Title>
        <p>Description: {product.description || "No description"}</p>
        <p>Price: ${product.price || "N/A"}</p>
        <Button id="btn" variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cardcomponent;
