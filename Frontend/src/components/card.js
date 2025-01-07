import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Cardcomponent = ({ product }) => {
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  if (!product) {
    return <p>No product data available.</p>; // Handle missing product data
  }

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You must be logged in to add products to the cart.");
        navigate("/Sign-up"); // Redirect to the sign-up page
        return
      }

      // Fetch cart items to check if the product is already in the cart
      const cartResponse = await axios.get("http://localhost:8080/api/v1/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const orderItems = cartResponse.data.orderItems || [];
      const isProductInCart = orderItems.some((item) => item.productId === product.id);

      if (isProductInCart) {
        alert("Product is already in your cart. Redirecting to cart...");
        navigate("/cartpage"); // Redirect to the cart page
        return
      } else {
        // Add product to the cart if not already present
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
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  return (
    <Card id="card" style={{ width: "18rem" }}>
      <Card.Body>
        <Link style={{ textDecoration: 'none' }} to={`/product/${product.id}`}>
          <Image
            style={{
              height: '300px',
              width: '300px',
              objectFit: 'cover',
            }}
            src={product.imageURL || "placeholder.jpg"}  // Default placeholder if image is missing
            fluid
          />
          <Card.Title>{product.name || "Unnamed Product"}</Card.Title>
          <p>Description: {product.description || "No description available"}</p>
          <p>Price: ${product.price || "N/A"}</p>
        </Link >
        <Button id="btn" variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Cardcomponent;
