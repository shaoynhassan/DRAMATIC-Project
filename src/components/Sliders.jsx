import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



import img1 from "../assets/banner.jpg";
import img2 from "../assets/Wednesday.webp";
import img3 from "../assets/squad.webp";
import img4 from "../assets/banner2.jpg";
import img5 from "../assets/movie.jpg";


const images = [img1, img2, img3, img4, img5];

function Slider() {
  return (
    <div className="w-full max-w-screen mx-auto py-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000, // প্রতি ৩ সেকেন্ডে অটো পরিবর্তন হবে
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination,]}
        className=" shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-100 lg:h-150"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
