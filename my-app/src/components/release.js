  import { Button  } from 'react-bootstrap';
  import { Link } from 'react-router-dom';
  import Container from 'react-bootstrap/esm/Container';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  // Import Swiper React components
  import { Swiper, SwiperSlide } from 'swiper/react';

  import Cardcomponent from './card';
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
           <SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
   </SwiperSlide>
   <SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>
<SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>
<SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>
<SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>
<SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>
<SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>
<SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>
<SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>
<SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>
<SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>
<SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>


          </Swiper>
         <p id='botn'>
          
 
  <Link to="/Fullproducts"  style={{textDecoration :'none'}}> <Button  style={{ backgroundColor:'var(--second-color)'}}variant="outline-secondary "className='me-3' >View All</Button> </Link> 
  </p>
  
        
        </Container>
      );
    }
