import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container} from "react-bootstrap";
import NavbarScroll from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null); // Track errors

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
      <NavbarScroll />
      <Container>
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image || "/path/to/default-image.jpg"}
              alt={product.name || "Product Image"}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
            <button id="btn" variant="primary">
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
