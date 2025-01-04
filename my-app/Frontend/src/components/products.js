import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cardcomponent from "./card";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Fullporducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://localhost:5000/api/products/children_wears")
      .then((response) => {
        setProducts(response.data); // Store the data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container className="fullproduct">
      <div className="link-slide">
        <ul className="d-flex " style={{ listStyle: "none" }}>
          <li>
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </li>
          <span>/</span>
          <li>
            <Link
              to="/Fullproducts"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={4} className="mb-4">
            <Cardcomponent
              ImageSrc={product.image} // Replace 'imageUrl' with the correct property from your API
              title={product.name} // Replace 'name' with the correct property from your API
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Col>
            <Cardcomponent
              ImageSrc="path_to_your_image.jpg"
              title="Product Name"
            />
          </Col>
          <Col>
            <Cardcomponent
              ImageSrc="path_to_your_image.jpg"
              title="Product Name"
            />
          </Col>
          <Col>
            <Cardcomponent
              ImageSrc="path_to_your_image.jpg"
              title="Product Name"
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Fullporducts;
