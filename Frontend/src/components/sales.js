import Container from "react-bootstrap/esm/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

export default function Basicard() {
  return (
    <Container className="parent-card">
      <span className="bordy"> flash-sales </span>
      <h2> Best Selling Products: </h2>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={4} // Default: 4 slides on larger screens
        breakpoints={{
          1024: {
            slidesPerView: 4, // For large screens, show 4 slides
          },
          768: {
            slidesPerView: 3, // For medium screens (tablet), show 3 slides
          },
          480: {
            slidesPerView: 2, // For small screens (mobile), show only 2 slide
          },
          300: {
            slidesPerView: 1, // For small screens (mobile), show only 1 slide
          },
          200: {
            slidesPerView: 1, // For small screens (mobile), show only 1 slide
          },
        }}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Link
            to="/shoesbags"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <Card>
              <Image
                style={{ marginRight:'6px' , width: "100%", height: "300px", textAlign: "center" }}
                src="http://localhost:8080/uploads/home/1736173806378.jpeg"
                fluid
              />
              <Card.Body>
                <Card.Title>Big Sale on Bags</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <Link to="/menpage" style={{ textDecoration: "none" }}>
            <Card>
              <Image
                style={{ marginRight:'6px' , width: "100%", height: "300px", textAlign: "center" }}
                src="http://localhost:8080/uploads/home/1736173817307.jpeg"
                fluid
              />
              <Card.Body>
                <Card.Title>Flash Sale on Jackets</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <Link to="/Fullproducts" style={{ textDecoration: "none" }}>
            <Card>
              <Image
                style={{ marginRight:'6px' , width: "100%", height: "300px", textAlign: "center" }}
                src="http://localhost:8080/uploads/home/1736173825281.jpeg"
                fluid
              />
              <Card.Body>
                <Card.Title>Weakend Sales-Harry Up!</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide>
          <Link to="/menpage" style={{ textDecoration: "none" }}>
            <Card>
              <Image
                style={{ marginRight:'6px' , width: "100%", height: "300px", textAlign: "center" }}
                src="http://localhost:8080/uploads/home/1736175545235.jpeg"
                fluid
              />
              <Card.Body>
                <Card.Title>50% Sale on Men wears</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </SwiperSlide>
        {/* Slide 5 */}
        <SwiperSlide>
          <Link to="/womenpage" style={{ textDecoration: "none" }}>
            <Card>
              <Image
                style={{ marginRight:'6px' , width: "100%", height: "300px", textAlign: "center" }}
                src="http://localhost:8080/uploads/home/1736174920214.jpeg"
                fluid
              />
              <Card.Body>
                <Card.Title>Best Selling-Limeted Time</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </SwiperSlide>
        {/* Slide 6 */}
        <SwiperSlide>
          <Link to="/childernpage" style={{ textDecoration: "none" }}>
            <Card>
              <Image
                style={{ marginRight:'6px' , width: "100%", height: "300px", textAlign: "center" }}
                src="http://localhost:8080/uploads/home/1736174795791.jpeg"
                fluid
              />
              <Card.Body>
                <Card.Title>Buy Two + 1 FREE</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </SwiperSlide>
      </Swiper>
      <span className="ending"></span>
    </Container>
  );
}
