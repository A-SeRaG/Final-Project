import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import { Pagination } from "swiper/modules";

export default function SwiperParent() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
    <div className="parent-swiper">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
       
      >
     <SwiperSlide  style={{ width: '100%', height: '50vh', textAlign:'center' }}>
  <img src="" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</SwiperSlide>
<SwiperSlide  style={{ width: '100%', height: '50vh', textAlign:'center' }}>
  <img src="" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</SwiperSlide>
           <SwiperSlide  style={{ width: '100%', height: '50vh', textAlign:'center' }}>
  <img src="" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</SwiperSlide>
<SwiperSlide  style={{ width: '100%', height: '50vh', textAlign:'center' }}>
  <img src="" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</SwiperSlide>
        
      </Swiper>
      </div>
    </>
    
);}
















