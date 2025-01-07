import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Cardcomponent from "./card";
import { Pagination } from "swiper/modules";
import axios from "axios";

export default function Release() {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/products"); // Replace with your API endpoint
        const fetchedProducts = response.data.products || response.data; // Adjust based on API structure
        setProducts(fetchedProducts.slice(0, 10)); // Limit to 10 products
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
    <Container className="release">
      <span className="bordy">Products</span>
      <h2>Explore our products:</h2>

      <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Cardcomponent product={product}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>

      <Container
      style={{marginTop:"10px"}}
      >
      <Link to="/Fullproducts" style={{ textDecoration: "none" }}>
        <Button
          id="botn"
          style={{ backgroundColor: "var(--second-color)" }}
          className="me-3"
        >
          View All
        </Button>
      </Link>
    </Container>
   </Container>
   </div>
  );
}
