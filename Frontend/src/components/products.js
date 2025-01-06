import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cardcomponent from "./card";

const Fullporducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const endpoint = category
          ? `http://localhost:8080/api/v1/products?category=${category}`
          : "http://localhost:8080/api/v1/products";
        const response = await axios.get(endpoint);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <Container className="fullproduct">
      <Row>
        {products.length > 0 ? (
          products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4}>
              <Cardcomponent product={product} />
            </Col>
          ))
        ) : (
          <p>No products available</p>
        )}
      </Row>
    </Container>
  );
};

export default Fullporducts;
