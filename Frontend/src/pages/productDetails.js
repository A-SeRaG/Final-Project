// src/components/ProductDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import NavbarScroll from '../components/navbar';
import Footer from '../components/footer';

const ProductDetails = () => {
  const { productId } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);

  // Fetch product details from the API
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <Container>
      <NavbarScroll />  
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" /> 
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>  
          <p>{product.description}</p>  
          <h4>${product.price}</h4> 
          <Button id='btn' variant="primary">Add to Cart</Button> 
        </div>
      </div>
      <Footer />  
    </Container>
  );
};

export default ProductDetails;
