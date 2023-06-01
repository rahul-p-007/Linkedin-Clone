import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./SwiperSection.css";

// import required modules
import { Navigation } from "swiper";
const SwiperSection = () => {
  return (
    <div className="swiper__section">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="swiper__slide">
            <div className="swiper__slide__info">
              <h1>Let the right people know you’re open to work</h1>
              <p>
                With the Open To Work feature, you can privately tell recruiters
                or publicly share with the LinkedIn community that you are
                looking for new job opportunities.
              </p>
            </div>
            <img
              src="https://static.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own"
              alt=""
              className="swiper__slide__img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__slide">
            <div className="swiper__slide__info">
              <h1>Conversations today could lead to opportunity tomorrow</h1>
              <p>
                Sending messages to people you know is a great way to strengthen
                relationships as you take the next step in your career.
              </p>
            </div>
            <img
              src="https://static.licdn.com/aero-v1/sc/h/2r8kd5zqpi905lkzsshdlvvn5"
              alt=""
              className="swiper__slide__img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__slide">
            <div className="swiper__slide__info">
              <h1>Stay up to date on your industry</h1>
              <p>
                Stay up to date on your industry From live videos, to stories,
                to newsletters and more, LinkedIn is full of ways to stay up to
                date on the latest discussions in your industry.
              </p>
            </div>
            <img
              src="https://static.licdn.com/aero-v1/sc/h/ann24vsq7r0ux3vipqa1n90gg"
              alt=""
              className="swiper__slide__img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSection;
