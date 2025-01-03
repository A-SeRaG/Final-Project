import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



export default function Basicard() {
  return (
    <Container className="parent-card">
    <span className='bordy'> flash-sales </span>
    <h2>  Best Selling Products: </h2>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}  // Default: 3 slides on larger screens
        breakpoints={{
          1024: {
            slidesPerView: 3, // For large screens, show 3 slides
          },
          768: {
            slidesPerView: 2, // For medium screens (tablet), show 2 slides
          },
          480: {
            slidesPerView: 1, // For small screens (mobile), show only 1 slide
          },
          300: {
            slidesPerView: 1, // For small screens (mobile), show only 1 slide
          },
        }}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
        <Card id='card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button   id='btn' variant="primary">add to cart</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>

      </Swiper>
    <span className='ending'></span>
    </Container>
  
  );
}
