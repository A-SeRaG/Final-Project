
import Container from 'react-bootstrap/esm/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Cardcomponent from './card';
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
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>


        {/* Slide 2 */}
        <SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>


        {/* Slide 3 */}
        <SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>


        {/* Slide 4 */}
        <SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>


        {/* Slide 5 */}
        <SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>
 
        {/* Slide 6 */}
        <SwiperSlide>
  <Cardcomponent 
    ImageSrc="path_to_your_image.jpg" 
    title="Product Name"
  />
</SwiperSlide>

      </Swiper>
    <span className='ending'></span>
    </Container>
  
  );
}
