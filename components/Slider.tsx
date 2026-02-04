"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="relative w-full h-80 md:h-[640px]">
      <Swiper
        slidesPerView={1} // ← 여기!
        spaceBetween={0} // ← 간격 0
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ type: "progressbar" }}
        navigation
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper white-text w-full h-full"
      >
        <SwiperSlide className="relative">
          <Image src="/img/bg_main.png" alt="Slide 1" fill priority sizes="100vw" quality={85} className="object-cover object-bottom" />
          <div className="md:bg-black/0 bg-black/30 w-full h-full absolute"></div>
          <div className="relative md:absolute md:left-32 md:top-40   md:text-start px-4 break-keep">
            <p>사업 규모가 아니라, 소수만 맡아 끝까지 책임집니다.</p>
            <h2>계속해서 품질을 위하여 노력하는 회사가 되겠습니다.</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image src="/img/bg_load.png" alt="Slide 1" fill priority sizes="100vw" quality={85} className="object-cover object-center" />
          <div className="md:bg-black/0 bg-black/30 w-full h-full absolute"></div>
          <div className="relative md:absolute md:left-32 md:top-40   md:text-start px-4 break-keep">
            <p>꾸준한 연구와 뚝심있는 마음가짐</p>
            <h2>계속해서 품질을 위하여 노력하는 회사가 되겠습니다.</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image src="/img/bg_children.png" alt="Slide 1" fill priority sizes="100vw" quality={85} className="object-cover object-center" />
          <div className="md:bg-black/30 bg-black/30 w-full h-full absolute"></div>
          <div className="relative md:absolute md:left-32 md:top-40   md:text-start px-4 break-keep">
            <p>꾸준한 연구와 뚝심있는 마음가짐</p>
            <h2>계속해서 품질을 위하여 노력하는 회사가 되겠습니다.</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
