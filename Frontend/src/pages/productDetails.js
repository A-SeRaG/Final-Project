import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container} from "react-bootstrap";

import Footer from "../components/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection


const ProductDetails = () => {
  const { productId } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null); // Track errors
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You must be logged in to add products to the cart.");
        return;
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

  // Fetch product details from the API
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const endpoint = `http://localhost:8080/api/v1/products/${productId}`;
        const response = await axios.get(endpoint);
        setProduct(response.data.product || response.data); // Adjust to API structure
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load product details.");
      }
    };

    if (productId) {
      fetchProductDetails();
    } else {
      setError("No product ID provided.");
    }
  }, [productId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
  
      <Container style={{ margin: "20px" }}>
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.imageURL || "/path/to/default-image.jpg"}
              alt={product.name || "Product Image"}
              className="img-fluid"
              style={{ width: "350px", height: "400px" }}
            />
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
            <Button variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetails;
