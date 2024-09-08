import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css'; 
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Banner = () => {
    return (
      <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper mt-10"
      >
        <SwiperSlide><img src="https://i.ibb.co.com/pzqcZk8/download-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/pzqcZk8/download-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/pzqcZk8/download-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/pzqcZk8/download-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/pzqcZk8/download-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/pzqcZk8/download-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/pzqcZk8/download-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/pzqcZk8/download-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/pzqcZk8/download-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/pzqcZk8/download-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/pzqcZk8/download-1.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
    );
};

export default Banner;