import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

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
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/tbSFBmL/desktop-wallpaper-hotel-management-hotels.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/jbJF8Gb/pexels-thorsten-technoman-109353-338504.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/PZr4HVy/lovepik-hotel-room-picture-500530794.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/y64YMfK/asian-guests-approach-reception-to-ask-accommodation-arriving-hotel-hoping-early-check-front-desk-st.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/93PdXcv/view-luxurious-hotel-hallway-23-2150683497.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/HGv25zB/csm-web-1085-16cc4bd5b7.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/gdtc9kc/hospitality-survey23-1024-1684175805.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/XkGRgkT/ai-generated-still-life-of-interior-modern-fitness-center-gym-with-a-workout-room-empty-space-for-te.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/mHSSDLY/chef-cooking-in-a-busy-restaurant-kitchen-back-view-generative-ai-photo.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
