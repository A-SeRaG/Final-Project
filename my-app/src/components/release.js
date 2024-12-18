import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'react-bootstrap/esm/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function Release() {
    return (
      <Container className='release'>
             <span className='bordy'>  products </span>
             <h2> Explore our products: </h2> 
     
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide> <Card id='card' style={{ width: '18rem' }}>
              <Card.Body >
              <Image src=" " fluid />;
              <Card.Title></Card.Title>
              <Button   id='btn' variant="primary">add to cart</Button>
              </Card.Body>
            </Card>
             </SwiperSlide>
          <SwiperSlide> <Card id='card' style={{ width: '18rem' }}>
              <Card.Body >
              <Image src=" " fluid />;
              <Card.Title></Card.Title>
              <Button   id='btn' variant="primary">add to cart</Button>
              </Card.Body>
            </Card>
            </SwiperSlide>
          <SwiperSlide> <Card id='card' style={{ width: '18rem' }}>
              <Card.Body >
              <Image src=" " fluid />;
              <Card.Title></Card.Title>
              <Button   id='btn' variant="primary">add to cart</Button>
              </Card.Body>
            </Card>
            </SwiperSlide>
          <SwiperSlide> <Card id='card' style={{ width: '18rem' }}>
              <Card.Body >
              <Image src=" " fluid />;
              <Card.Title></Card.Title>
              <Button   id='btn' variant="primary">add to cart</Button>
              </Card.Body>
            </Card>
            </SwiperSlide>
          <SwiperSlide> <Card id='card' style={{ width: '18rem' }}>
              <Card.Body >
              <Image src=" " fluid />;
              <Card.Title></Card.Title>
              <Button   id='btn' variant="primary">add to cart</Button>
              </Card.Body>
            </Card>
            </SwiperSlide>
          <SwiperSlide> <Card id='card' style={{ width: '18rem' }}>
              <Card.Body >
              <Image src=" " fluid />;
              <Card.Title></Card.Title>
              <Button   id='btn' variant="primary">add to cart</Button>
              </Card.Body>
            </Card>
            </SwiperSlide>
          <SwiperSlide> <Card id='card' style={{ width: '18rem' }}>
              <Card.Body >
              <Image src=" " fluid />;
              <Card.Title></Card.Title>
      
              </Card.Body>
            </Card>
            </SwiperSlide>
          <SwiperSlide> <Card id='card' style={{ width: '18rem' }}>
              <Card.Body >
              <Image src=" " fluid />;
              <Card.Title></Card.Title>
              <Button   id='btn' variant="primary">add to cart</Button>
              </Card.Body>
            </Card>
            </SwiperSlide>
          <SwiperSlide> <Card id='card' style={{ width: '18rem' }}>
              <Card.Body >
              <Image src=" " fluid />;
              <Card.Title></Card.Title>
              <Button   id='btn' variant="primary">add to cart</Button>
              </Card.Body>
            </Card>
            </SwiperSlide>
        </Swiper>
       <p id='botn'>
        
<Button onClick={"k"} style={{ backgroundColor:' var(--main-color)'}}variant="outline-secondary "className='me-3' >View All</Button>
<FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{fontSize:'20px'}} />
</p>

      
      </Container>
    );
  }